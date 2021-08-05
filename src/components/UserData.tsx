import React, { useEffect } from "react";
import { groupsActions } from "../actions/groups.actions.";
import { fetchGroups } from "../api";
import { groupQuerySelector } from "../selectors/groups.selectors";
import { useAppSelector } from "../store";
import Input from "./Input/Input";

interface Props {}

const UserData: React.FC<Props> = () => {
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

  const query = useAppSelector(groupQuerySelector);

  const groups = useAppSelector((state) => {
    const groupsIds = state.groups.queryMap[state.groups.query] || [];
    const groups = groupsIds.map((id) => state.groups.byId[id]);
    return groups;
  });

  // const dispatch = useDispatch();

  useEffect(() => {
    fetchGroups({ status: "all-groups", query }).then((groups) =>
      groupsActions.queryCompleted(query, groups)
    );
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
          groupsActions.query(e.target.value);
        }}
        placeholder="Search..."
        className="border rounded"
      ></Input>
      <div>
        {groups.map((group) => {
          return <div>{group.name}</div>;
        })}
      </div>
    </div>
  );
};

UserData.defaultProps = {};

export default React.memo(UserData);
