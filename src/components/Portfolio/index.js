import React from "react";
import sport from "../../assets/small/MARV'S SPORTS.png";
import forecast from "../../assets/small/5-day-forcast.png";
import albania from "../../assets/small/albanian quiz.png";
import estate from "../../assets/small/real estate.png";
import './style.css'


function Portfolio() {
  return (
    <div className="container">
      <section>
        <div className="row px-5">
          <h1 className="section-title text-center p-3">Work</h1>

          <div className="col-md-12">
            <div className="project">
              <h4>MARV'S SPORTS</h4>
              <div className="row">
                <div className="col-md-4">
                  <a href="https://github.com/alkidavaci/sports-app" >
                    <img
                      src={sport}
                      className="my-2 img-fluid rounded"
                      alt="MARV'S SPORTS"
                    />
                  </a>
                </div>
                <div className="project col-md-8">
                  <p>
                    MARV'S SPORTS is a live streaming website which is used to retrieve sports data. The user has to select a soccer league from the leagues dropdown, then the user has to choose a team from the teams dropdown. Then the user has to select a date from the calendar to retrieve chosen day's data. The news headlines, scores & upcoming matches are also displayed side by side. Used Moment.js library to work with date. Used Rapid API to retrieve match data for teams.
                  </p>
                </div>
              </div>
            </div>
          </div>


          <div className="col-md-12">
            <div className="project">
              <h4>5 Day Forecast</h4>
              <div className="row">
                <div className="col-md-4">
              <a href="https://github.com/alkidavaci/5-day-forecast">
                <img
                  src={forecast}
                  className="my-2 img-fluid rounded"
                  alt="5 Day Forecast"
                />
              </a>
              </div>
                <div className="project col-md-8">
                <p>
                  Day Forecast website is application that allows a user to see the weather outlook for multiple cities. User search for a city name and will view future weather conditions for that city for current day and 5 day forecast. Displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity. {" "}
                  </p>
                </div>
              </div>
            </div>
          </div>


          <div className="col-md-12">
            <div className="project">
            <h4>Albania Quiz</h4>
            <div className="row">
                <div className="col-md-4">
              <a href="https://github.com/alkidavaci/Albania-Quiz">
                <img
                  src={albania}
                  className="my-2 img-fluid rounded"
                  alt="Albanian Quiz"
                />
              </a>
              </div>
                <div className="project col-md-8">
                <p>
                  Albania, located in southern Europe is a country that not everyone know. This website is a quiz how much you know Albania. Has 5 questions total and they are all with 4 choice. The time limit for question is 60 seconds and for each wrong answer will penalize with 10 seconds less. After you finish the quiz will show your scores. You can put your initial and save the scores if they are on the top 5. Also you can access your high scores and clear them. Enjoy the quiz!{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-md-12">
            <div className="project">
              <h4>4 Real Estate</h4>
              <div className="row">
                <div className="col-md-4">
              <a href="https://github.com/alkidavaci/4-Real-Estate">
                <img
                  src={estate}
                  className="my-2 img-fluid rounded"
                  alt="4 Real Estate"
                />
              </a>
              </div>
                <div className="project col-md-8">
                <p>
                  This is a real-estate listing website with seeded listings from our SQL database. Users can login or create an account to create new listings, and once submitted, their listing appears on the Home Page. Conditional logic shows login or logout/add listing buttons, and Cloudinary is used to store house pictures.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ section>
    </div >)
}
export default Portfolio;

