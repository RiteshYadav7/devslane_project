import axios from "axios";
import React, { useEffect, useState } from "react";
import { fetchGroups } from "../api";
import { Group } from "../models/Group";
import Search from "./Search/Search";

interface Props {
  // query: string;
}

const UserData: React.FC<Props> = (props) => {
  const [query, setQuery] = useState("");
  const [groupData, setGroupData] = useState<Group[]>([]);

  useEffect(() => {
    if (query) {
      fetchGroups({ status: "all-groups", query: query })
        .then((response) => {
          if (response?.status == 200) {
            console.log(response);
            setGroupData(response?.data.data);
          } else {
            console.log("error while fetching data");
          }
        })
        .catch((error: any) => {
          console.log(error);
        });
    }
  }, [query]);


  return (
    <div className="w-full h-full">
      <div>
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
      </div>
    </div>
  );
};

UserData.defaultProps = {};

export default React.memo(UserData);
