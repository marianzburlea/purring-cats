import React, { useEffect } from "react";
import { get, post, delete as remove } from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Fab } from "@material-ui/core";
import {
  Favorite as FavoriteIcon,
  FavoriteBorder as FavoriteBorderIcon,
  ThumbDown as ThumbDownIcon,
  ThumbUp as ThumbUpIcon,
  ThumbDownOutlined as ThumbDownOutlinedIcon,
  ThumbUpOutlined as ThumbUpOutlinedIcon,
} from "@material-ui/icons";

import { API_KEY, API_URL } from "../../config";
import { initListAction } from "../../store/cat/list.action";
import {
  initFavouriteListAction,
  updateFavouriteAction,
} from "../../store/cat/favourite.action";
import { initVoteListAction } from "../../store/cat/vote.action";
import * as HS from "./home.style";
import { toast } from "react-toastify";
import { DynamicImage } from "../dynamic-image";

const Home = () => {
  const dispatch = useDispatch();
  const [catImagelist, favouriteList, voteList] = useSelector(({ cat }) => [
    cat.list,
    cat.favourite,
    cat.vote,
  ]);

  const config = {
    headers: {
      "x-api-key": API_KEY,
    },
  };
  const urlFavourite = `${API_URL}/favourites`;
  const urlVote = `${API_URL}/votes`;

  useEffect(() => {
    const getCatResult = async () => {
      let result = null;
      const url = `${API_URL}/images?limit=10`;

      try {
        result = await get(url, config);
      } catch ({ response }) {
        result = response;
      } finally {
        const responseStatusType = String(result.status).slice(0, 1);
        if (responseStatusType === "4") {
          toast.error(result.data.message);
        }
        if (responseStatusType === "2") {
          // toast.success('Data retreived successfully')
          dispatch(initListAction(result.data));
        }
      }
    };

    const getFavouriteResult = async () => {
      let result = null;

      try {
        result = await get(urlFavourite, config);
      } catch ({ response }) {
        result = response;
      } finally {
        const responseStatusType = String(result.status).slice(0, 1);
        if (responseStatusType === "4") {
          toast.error(result.data.message);
        }
        if (responseStatusType === "2") {
          // toast.success('Data retreived successfully')
          dispatch(initFavouriteListAction(result.data));
        }
      }
    };

    const getVoteResult = async () => {
      let result = null;

      try {
        result = await get(urlVote, config);
      } catch ({ response }) {
        result = response;
      } finally {
        const responseStatusType = String(result.status).slice(0, 1);
        if (responseStatusType === "4") {
          toast.error(result.data.message);
        }
        if (responseStatusType === "2") {
          // toast.success('Data retreived successfully')
          dispatch(initVoteListAction(result.data));
        }
      }
    };

    getCatResult();
    getFavouriteResult();
    getVoteResult();
  }, []);

  const handleVote = (image_id, value, voteObject) => {
    const postVote = async () => {
      let result = null;
      try {
        if (voteObject) {
          // if vote object, it means it exists, so we want to delete/remove
          result = await remove(`${urlVote}/${voteObject.id}`, config);
        } else {
          // if vote object is not here, it means it hasn't been created, so we want to add to db
          result = await post(
            urlVote,
            {
              value,
              image_id,
            },
            config
          );
        }
      } catch ({ response }) {
        result = response;
      } finally {
        toast(result.status);
      }
    };

    postVote();
  };

  const handleFavourite = (image_id, favouriteObject) => {
    const postFavourite = async () => {
      let result = null;
      try {
        if (favouriteObject) {
          // must delete from favourite
          result = await remove(
            `${urlFavourite}/${favouriteObject.id}`,
            config
          );
        } else {
          // must add to favourites
          result = await post(urlFavourite, { image_id }, config);
        }
      } catch ({ response }) {
        result = response;
      } finally {
        const responseStatusType = String(result.status).slice(0, 1);
        if (responseStatusType === "4") {
          toast.error(result.data.message);
        }
        if (responseStatusType === "2") {
          if (favouriteObject) {
            // remove from favourite store
            dispatch(updateFavouriteAction(image_id));
          } else {
            // add to favourite store
            dispatch(updateFavouriteAction(image_id, result.data.id));
          }
        }
      }
    };

    postFavourite();
  };

  return (
    <div>
      <h1>Nice list of cats</h1>
      <HS.StyledCatList>
        {catImagelist.map((catImage) => {
          const favouriteId = favouriteList.find(
            (fav) => fav.image_id === catImage.id
          );
          const voteIdUp = voteList.find(
            (vote) => vote.image_id === catImage.id && vote.value === 1
          );
          const voteIdDown = voteList.find(
            (vote) => vote.image_id === catImage.id && vote.value === 0
          );
          // console.group()
          // console.log(catImage.id)
          // console.log(favouriteList)
          // console.log(favouriteId)
          // console.log(favouriteIdUp, favouriteIdDown)
          // console.groupEnd()

          const voteId = 2345;
          return (
            <div key={catImage.id}>
              <HS.StyledCatCard image={catImage.url} />
              <HS.StyledCatAction>
                <div></div>

                <HS.ImageTooltip
                  title={<DynamicImage image="like.gif" />}
                >
                  <Fab
                    size="small"
                    color="primary"
                    aria-label="Like this image"
                    onClick={() => handleVote(catImage.id, 1, voteIdUp)}
                  >
                    {voteIdUp ? <ThumbUpIcon /> : <ThumbUpOutlinedIcon />}
                  </Fab>
                </HS.ImageTooltip>

                <HS.ImageTooltip
                  title={<DynamicImage image="dislike.gif" />}
                >
                  <Fab
                    size="small"
                    color="primary"
                    aria-label="Dislike this image"
                    onClick={() => handleVote(catImage.id, 0, voteIdDown)}
                  >
                    {voteIdDown ? <ThumbDownIcon /> : <ThumbDownOutlinedIcon />}
                  </Fab>
                </HS.ImageTooltip>

                <HS.ImageTooltip
                  title={
                    <DynamicImage
                      image={`${favouriteId ? "bye" : "love"}.gif`}
                    />
                  }
                >
                  <Fab
                    size="small"
                    color="secondary"
                    aria-label="Add to favourite"
                    onClick={() => handleFavourite(catImage.id, favouriteId)}
                  >
                    {favouriteId ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                  </Fab>
                </HS.ImageTooltip>
              </HS.StyledCatAction>
            </div>
          );
        })}
      </HS.StyledCatList>
    </div>
  );
};

export { Home };
