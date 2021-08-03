import axios from "axios";
import React, { useEffect, useState } from "react";
import { HiSearch } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { fetchGroups } from "../api";
import { Group } from "../models/Group";
import { useAppSelector } from "../store";
import Input from "./Input/Input";
import Search from "./Search/Search";

interface Props {}

const UserData: React.FC<Props> = (props) => {
  // const [query, setQuery] = useState("");
  // const [groupData, setGroupData] = useState<Group[]>([]);

  // useEffect(() => {
  //   if (query) {
  //     fetchGroups({ status: "all-groups", query: query })
  //       .then((response) => {
  //         if (response?.status == 200) {
  //           console.log(response);
  //           setGroupData(response?.data.data);
  //         } else {
  //           console.log("error while fetching data");
  //         }
  //       })
  //       .catch((error: any) => {
  //         console.log(error);
  //       });
  //   }
  // }, [query]);

  const query = useAppSelector((state) => state.groupQuery);

  const groups = useAppSelector((state) => {
    const groupsIds = state.groupQueryMap[state.groupQuery] || [];
    const groups = groupsIds.map((id) => state.groups[id]);
    return groups;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    fetchGroups({ status: "all-groups", query }).then((groups) => {
      dispatch({
        type: "groups/query_completed",
        payload: { groups: groups, query },
      });
    });
  }, [query]);

  return (
    <div className="w-full h-full">
      {/* <div>
        <Search
          setQuery={setQuery}
        />
        <div>
          {groupData.map(data => {
              return (
                <div>{data.creator.first_name} - {data.name}</div>
              )
          })}
        </div>
      </div> */}

      <Input
        type="text"
        value={query}
        onChange={(e) => {
          dispatch({ type: "groups/query", payload: e.target.value });
        }}
        placeholder="Search..."
        className="border rounded"
      ></Input>
      <div>
        {groups.map((group) => {
          return(
          <div>{group.name}</div>
          );
        })}
      </div>
    </div>
  );
};

UserData.defaultProps = {};

export default React.memo(UserData);
