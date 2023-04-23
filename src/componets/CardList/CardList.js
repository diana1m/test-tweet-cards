
import { useDispatch, useSelector } from "react-redux";
import { selectPage, selectUsers } from "../../redux/selectors";
import { CardItem } from "../CardItem/CardItem";
import { ListTweets } from "./CardList.styled";
import { useEffect } from "react";
import { fetchTweets } from "../../redux/operations";
import { changePage } from "../../redux/slice";

export const CardList = () => {
    const users = useSelector(selectUsers);
    const pages = useSelector(selectPage);
    const dispatch = useDispatch();

    const handleLoadMore = () => {
        dispatch(changePage())
      };
    
    useEffect(() => {
        dispatch(fetchTweets(pages));
    }, [dispatch, pages]);

    return(
        <>
        <ListTweets>
            {users.map(user => <CardItem key={user.id} id={user.id} user={user}/>)}
        </ListTweets>
        <button
          type="button"
          onClick={handleLoadMore}
          disabled={pages === 4}
        >
          Load more
        </button>
        </>
    )
}