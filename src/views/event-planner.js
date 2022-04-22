import React from 'react';
import { useState } from 'react';
// import { useAuth0 } from '@auth0/auth0-react';

const EventPlanner = () => {
    // const { user } = useAuth0();
    // const { name, picture, email } = user;
    const resultsDiv = document.getElementById("results");

    const [form, setForm] = useState({
        email: '',
        name: '',
        eventType: 'birthday',
        expectedGuests: 100,
        venueSpaceL: 100,
        venueSpaceW: 100,
        suggestDJ: false,

    });

    const planEvent = (e) => {
        e.preventDefault();

        const calculateTopSpeakers = () => {
            const ans =
                form.venueSpaceL <= 101 ? '1 15inch' : form.venueSpaceL <= 200 ? '2 15inch' : form.venueSpaceL <= 250 ? '2 15inch, 1 12inch' : '4 15inch or line array'
            return ans
        }

        const calculateBottomSpeakers = () => {
            const ans =
                form.venueSpaceW <= 101 ? '1 12inch' : form.venueSpaceL <= 200 ? '1 15inch' : form.venueSpaceL <= 250 ? '1 18inch, 1 12inch' : '4 15inch or line array'
            return ans
        }

        resultsDiv.innerHTML = `
        <div>
        <h2>Results:</h2>
        <p>Name: ${form.name}</p>
        <p>Name: ${form.email}</p>
        <p>Event Type: ${form.eventType}</p>
        <p>Expected Guests: ${form.expectedGuests}</p>
        <p>Venue Length: ${form.venueSpaceL}</p>
        <p>Venue Width: ${form.venueSpaceW}</p>
        <p>Suggest DJ's and Hosts: ${form.suggestDJ ? 'No' : 'Yes'}</p>
        
        <div className="answer-box container my-2">
            <p>Estimated Speakers based on Space & Guests</p>
            <p> Minimum Top Speakers: ${calculateTopSpeakers()} </p>
            <p> Minimum Bass Speakers: ${calculateBottomSpeakers()} </p>

            ${form.suggestDJ ? "Suggested DJs: <a href='/dj-list'>DJs</a>" : null}
        </div>
        </div>`;

    }

    return (
        <div>
            <h1 className='text-center mt-5'>Event Planner</h1>
            <p className='text-center p-4'>Please fill out the form. Our application will recommend equipment for your event and suggest available DJs.</p>
            <form className='container' onSubmit={planEvent}>
                <div class="form-group">
                    <label for="InputEmail">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="InputEmail"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        value={form.email}
                        onChange={e => {
                            setForm({
                                ...form,
                                email: e.target.value
                            });
                        }}
                    />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="Name">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Name"
                        value={form.name}
                        onChange={e => {
                            setForm({
                                ...form,
                                name: e.target.value
                            });
                        }} />
                </div>
                <div className="form-group">
                    <label for="exampleFormControlSelect1">Event Type</label>
                    <select className="form-control" id="TypeSelect">
                        <option value={form.eventType}
                            onChange={e => {
                                setForm({
                                    ...form,
                                    eventType: e.target.value
                                });
                            }}>Birthday Party</option>
                        <option value={form.eventType}
                            onChange={e => {
                                setForm({
                                    ...form,
                                    eventType: e.target.value
                                });
                            }}>Fete</option>
                        <option value={form.eventType}
                            onChange={e => {
                                setForm({
                                    ...form,
                                    eventType: e.target.value
                                });
                            }}>Wedding</option>
                    </select>
                </div>

                <div className="form-group">
                    <label for="guests">Number of expected attendees</label>
                    <input
                        type="number"
                        className="form-control"
                        id="numberGuests"
                        placeholder=""
                        value={form.expectedGuests}
                        onChange={e => {
                            setForm({
                                ...form,
                                expectedGuests: e.target.value
                            });
                        }} />
                </div>

                <div className="form-group mt-3">
                    <label className="p5" for="space">Length (feet):</label>
                    <input
                        type="number"
                        className="form-control"
                        id="spaceL"
                        placeholder=""
                        value={form.venueSpaceL}
                        onChange={e => {
                            setForm({
                                ...form,
                                venueSpaceL: e.target.value
                            });
                        }} />
                </div>
                <div className="form-group">
                    <label for="spaceW">Breadth (feet):</label>
                    <input
                        type="number"
                        className="form-control"
                        id="space"
                        placeholder=""
                        value={form.venueSpaceW}
                        onChange={e => {
                            setForm({
                                ...form,
                                venueSpaceW: e.target.value
                            });
                        }} />
                </div>

                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="suggestDJ"
                        value={form.suggestDJ}
                        onChange={e => {
                            setForm({
                                ...form,
                                suggestDJ: e.target.value
                            });
                        }}
                    />
                    <label className="form-check-label" for="suggestDJ">Suggest DJs</label>
                </div>

                <button className="btn btn-primary my-2" type="submit">Submit</button>
            </form>

            <div className='container mt-4 p-3 results' id='results'>
            </div>
        </div>
    );
};

export default EventPlanner;