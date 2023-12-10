import Button from "../../../Components/Button/index.jsx";
import Buttonsecondary from "../../../Components/Button Secondary/buttonsecondary.jsx";
import Linkscustomizationempty from "../../../Components/Links Customization Empty/linkscustomizationempty.jsx";
import Linkscustomization from "../../../Components/Links Customization/linkscustomization.jsx";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosPrivate } from "../../../api/axios.js";
import { useContext } from "react";
import linkContext from "../../../../context/linkContext.jsx";
import LinkInputSkeleton from "../../../Components/LinkInputSkeleton/LinkInputSkeleton.jsx";
import useAuth from "../../../../hooks/useAuth.jsx";
import toast from "react-hot-toast";
import { closestCenter, DndContext } from "@dnd-kit/core";
import {
    restrictToVerticalAxis,
    restrictToWindowEdges,
    restrictToFirstScrollableAncestor,
} from "@dnd-kit/modifiers";
import {
    arrayMove,
    SortableContext,
    verticalListSortingStrategy,
} from "@dnd-kit/sortable";

const getLinksEndpoint = "/link";
const saveLinksEndpoint = "/link/save";

const Linkstab = () => {
    const navigate = useNavigate();
    const isAuthenticated = useAuth();
    if (!isAuthenticated) {
        navigate("/login");
        return;
    }
    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/login");
        }
    }, [isAuthenticated, navigate]);
    const [isLoading, setIsLoading] = useState(true);
    const [disable, setDisable] = useState(false);

    const { linksData, updateLinksData, setLinksData } =
        useContext(linkContext);
    const [order, setOrder] = useState(1);

    useEffect(() => {
        (async () => {
            try {
                if (linksData.length === 0) {
                    const res = await axiosPrivate("/link");
                    res?.data?.links && setLinksData(res.data.links);
                }
                setIsLoading(false);
                return;
            } catch (error) {
                console.error(error);
                setIsLoading(false);
                return;
            }
        })();
    }, []);

    const onDragEnd = (event) => {
        const { active, over } = event;
        console.log(event);
        if (active.id === over.id) {
            return;
        }
        setLinksData((links) => {
            const oldIndex = links.findIndex(
                (link) => link.order === active.id,
            );
            const newIndex = links.findIndex((link) => link.order === over.id);
            console.log(oldIndex, newIndex);
            const newLinks = arrayMove(links, oldIndex, newIndex);
            const updatedLinks = newLinks.map((link, index) => ({
                ...link,
                order: index + 1,
            }));
            return updatedLinks;
        });
    };

    const handleAddLinkClick = () => {
        updateLinksData(order);
        // setOrder(1);
        setLinksData((prev) =>
            prev.map((link, index) => ({
                ...link,
                order: index + 1,
            })),
        );
    };
    const handleRemoveLink = (index) => {
        const updatedLinksData = linksData.filter((_, i) => i !== index);
        const updatedLinksDataWithOrder = updatedLinksData.map((link, i) => ({
            ...link,
            order: i + 1,
        }));
        setLinksData(updatedLinksDataWithOrder);
        setOrder(updatedLinksDataWithOrder.length + 1);
    };

    const saveToDB = async () => {
        try {
            setDisable(true);
            const res = await axiosPrivate.post(saveLinksEndpoint, linksData);
            console.log(res);
            toast.success("Updated successfully!", {
                duration: 2000,
                position: "bottom-center",
                style: {
                    backgroundColor: "var(--black-90-)",
                    color: "var(--white-90-)",
                },
            });
            return;
        } catch (error) {
            console.log(error);
            toast.error("Couldn't save. Try again.", {
                duration: 2000,
                position: "bottom-center",
                style: {
                    backgroundColor: "var(--black-90-)",
                    color: "var(--white-90-)",
                },
            });
            return;
        } finally {
            setDisable(false);
        }
    };

    return (
        <>
            <div className="links-customization">
                <div className="links-customization-header">
                    <h2>Customize your links</h2>
                    <p>
                        Add/edit/remove links below and then share all your
                        profiles with the world!
                    </p>
                </div>
                <Buttonsecondary
                    buttonSecondaryText="+ Add new link"
                    onClick={handleAddLinkClick}
                />
                <div className="links-customization-main">
                    <DndContext
                        collisionDetection={closestCenter}
                        onDragEnd={onDragEnd}
                        modifiers={[
                            restrictToVerticalAxis,
                            restrictToWindowEdges,
                            restrictToFirstScrollableAncestor,
                        ]}
                    >
                        <SortableContext
                            items={
                                linksData
                                    ? linksData.map((link) => link.order)
                                    : []
                            }
                            strategy={verticalListSortingStrategy}
                        >
                            {isLoading ? (
                                <>
                                    <LinkInputSkeleton />
                                    <LinkInputSkeleton />
                                </>
                            ) : linksData && linksData.length ? (
                                linksData.map((link, ind) => (
                                    <Linkscustomization
                                        key={link.link}
                                        link={link || ""}
                                        order={link.order}
                                        index={ind}
                                        loading={isLoading}
                                        platform={link.platform.text || ""}
                                        onRemove={handleRemoveLink}
                                    />
                                ))
                            ) : (
                                <Linkscustomizationempty />
                            )}
                        </SortableContext>
                    </DndContext>
                </div>
            </div>
            <div className="links-customization-footer">
                <div className="links-customization-footer-btn">
                    <Button
                        disabled={disable}
                        loadingText={disable && "Saving..."}
                        handleClick={saveToDB}
                        buttonText="Save"
                    />
                </div>
            </div>
        </>
    );
};

export default Linkstab;
