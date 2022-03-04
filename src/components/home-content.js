import React from "react";
import { NavLink } from "react-router-dom";
import dj_icon from "../assets/img/dj-icon.png";
import list_icon from "../assets/img/list-icon.png";
import client_icon from "../assets/img/client-icon.png";
import rated_dj_icon from "../assets/img/rated-dj-icon.png";
import equipment_icon from "../assets/img/equipment-icon.png";
import info_icon from "../assets/img/personal-info-icon.svg";
import Usercard from "./usercard";

const fakeUsers = [
  { id: 1, firstName: 'Brandon', lastName: 'James', email: 'king_james@test.com', alias: 'King James', image: 'https://www.pngkey.com/png/full/349-3499617_person-placeholder-person-placeholder.png' },
  { id: 2, firstName: 'Trivelle', lastName: 'Blake', email: 'project_b@test.com', alias: 'Project B', image: 'https://www.pngkey.com/png/full/349-3499617_person-placeholder-person-placeholder.png' },
  { id: 3, firstName: 'Emmanuel', lastName: 'Sammy', email: 'jus_sammy@test.com', alias: 'Jus Sammy', image: 'https://www.pngkey.com/png/full/349-3499617_person-placeholder-person-placeholder.png' },
  { id: 4, firstName: 'Marcus', lastName: 'Williams', email: 'marcus@test.com', alias: 'Marcus Williams', image: 'https://www.pngkey.com/png/full/349-3499617_person-placeholder-person-placeholder.png' },

];


const HomeContent = () => (
  <>
    {/* Section 1 */}
    <div className="next-steps mb-4 pt-1">
      <h2 className="my-5 text-center">User Portals</h2>

      <div className="row">
        <div className="col-sm-4 ">
          <div className="card shadow rounded-lg border-1">
            <img class="card-img-top dj-icon" src={client_icon} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title text-center">Clients</h5>
              <p className="card-text">Register as a user/client. Edit your user profile. Upload events.</p>
              <a href="#" className="btn btn-primary btn-block rounded gradient-bg text-x2">Enter</a>
            </div>
          </div>
        </div>
        <div className="col-sm-4 ">
          <div className="card shadow rounded-lg border-1">
            <img class="card-img-top dj-icon" src={list_icon} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title text-center">Directory</h5>
              <p className="card-text">View DJ profiles and rates. Book DJ's and/or Hosts for events.</p>
              <NavLink
                to="/dj-list"
                exact
              >
                <div className="btn btn-primary rounded btn-block gradient-bg text-x2">Enter</div>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="col-sm-4 ">
          <div className="card shadow rounded-lg border-1">
            <img class="card-img-top dj-icon" src={dj_icon} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title text-center">DJs</h5>
              <p className="card-text">Register as a DJ/Host. Edit or update your DJ profile. Accept event requests.</p>
              <a href="#" className="btn btn-primary rounded btn-block gradient-bg text-x2">Enter</a>
            </div>
          </div>
        </div>
      </div>

      <img className="info-icon" src={info_icon} alt="Planning Icon" />
    </div>

    {/* Section 2 */}
    <div className="next-steps mb-4 pt-1 mt-5 section-2">
      <h2 className="my-5 text-center">Top Rated DJ's and Hosts</h2>
      <div className="row">
        <div className="col">
          <Usercard users={fakeUsers} />
        </div>
      </div>

      <img className="rated-dj-icon" src={rated_dj_icon} alt="Planning Icon" />
    </div>

    {/* Section 3 */}
    <div className="next-steps mb-4 pt-1 mt-5 section-3">
      <h2 className="my-5 text-center">Top Rated Equipment Suppliers *Possibility</h2>

      <div className="row">
        <div className="col">
          <Usercard users={fakeUsers} />
        </div>
      </div>

      <img className="equipment-icon" src={equipment_icon} alt="Planning Icon" />
    </div>

    {/* Section 4 */}
    <div className="mb-4 py-1 px-5 mt-5 bg-light section-4">
      <h2 className="my-5 text-center">ESP Suggestions Module</h2>

      <div className="row">
        <div className="col">
        </div>
      </div>
    </div>

  </>);

export default HomeContent;
