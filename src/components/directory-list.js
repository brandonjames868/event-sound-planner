import React, { useState, useEffect } from "react";
import axios from "axios";
import DirectoryItem from "./directory-item";

const DirectoryList = () => {
  //initialize state
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);
  const [djs, setDjs] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    //set loading state
    setLoading(true);

    //fetch all djs
    async function getDjs() {
      const { data } = await axios.get(process.env.REACT_APP_API_URL + "/djs", {
        headers: {
          Authorization: "Bearer " + process.env.REACT_APP_API_TOKEN,
        },
      });
      setDjs(data.data);
      setLoading(false);
    }
    // call function
    getDjs();
  }, []); //call on component load

  const handleSearch = async () => {
    try {
      //get data and filter using rest api
      const { data } = await axios.get(
        process.env.REACT_APP_API_URL +
        "/djs?filters[$or][0][stagename][$containsi]=" +
        search +
        "&filters[$or][1][firstname][$containsi]=" +
        search +
        "&filters[$or][2][lastname][$containsi]=" +
        search,
        {
          headers: {
            Authorization: "Bearer " + process.env.REACT_APP_API_TOKEN,
          },
        }
      );

      //set state to results
      setDjs(data.data);
    } catch (e) {
      //log error
      console.log(e);
    }
  };

  // handle search and monitor for changes in search field
  useEffect(() => {
    handleSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <div className="container">
      <h3 className="p-3 text-center my-5">DJ/Host Directory</h3>

      <div className="form-group has-search">
        <span className="fa fa-search form-control-feedback"></span>
        <input
          type="text"
          className="form-control"
          placeholder="Search"
          onInput={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="row my-5 custom-dir-container">
        {djs && djs.map((user) => <DirectoryItem user={user} key={user.id} />)}
      </div>
    </div>
  );
};

export default DirectoryList;
