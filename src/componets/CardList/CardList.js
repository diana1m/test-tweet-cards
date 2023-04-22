
import { useDispatch, useSelector } from "react-redux";
import { selectPage, selectUsers } from "../../redux/selectors";
import { CardItem } from "../CardItem/CardItem";
import { ListTweets } from "./CardList.styled";
import { useEffect, useState } from "react";
import { fetchTweets } from "../../redux/operations";
import { changePage } from "../../redux/slice";

export const CardList = () => {
    const [page, setPage] = useState(1);
    const users = useSelector(selectUsers);
    const dispatch = useDispatch();

    const handleLoadMore = () => {
        setPage((prevState) => prevState + 1); 
      };
    
    useEffect(() => {
        if(page === 1) return;
        dispatch(fetchTweets(page));
    }, [dispatch, page]);

    return(
        <>
        <ListTweets>
            {users.map(user => <CardItem key={user.id} id={user.id} user={user}/>)}
        </ListTweets>
        <button
          type="button"
          onClick={handleLoadMore}
          disabled={page === 4}
        >
          Load more
        </button>
        </>
    )
}