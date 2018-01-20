import React from 'react';

const Description = () => {
    return (
        <div>
            <div className="row row__no-padding">
                <div className="col-xs-12">
                    {/* Product Item Name */}
                    <div><h1>Universal Studio Singapore</h1></div>
                    <div className="row row__no-padding">
                        
                        {/* Departure Block */}
                        <div className="col-xs-12 col-md-3 row__margin">
                            <i className="glyphicon glyphicon-map-marker"></i> Dearture: Singapore
                        </div>
                        <div className="col-xs-12 col-md-9">
                            
                            {/* Features Block with icons */}
                            <div className="row text-center icon">
                                <div className="col-xs-4">
                                    <div>
                                        <img src="http://ex.theasia.com/en/icons/img-ticket.png" alt="Type" className="icon--spacing" />
                                    </div>
                                    <div>
                                        <strong>Type</strong>
                                        <div>Ticket</div>
                                    </div>
                                </div>
                                <div className="col-xs-4">
                                    <div>
                                        <img src="http://ex.theasia.com/en/icons/img-open.png" alt="Open Hours" className="icon--spacing" />
                                    </div>
                                    <div>
                                        <strong>Open Hours</strong>
                                        <div>10:00 - 21:30</div>
                                    </div>
                                </div>
                                <div className="col-xs-4">
                                    <div>
                                        <img src="http://ex.theasia.com/en/icons/img-calendar.png" alt="Available Day" className="icon--spacing" />
                                    </div>
                                    <div>
                                        <strong>Available Day</strong>
                                        <div>Everyday</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <hr />

            {/* Static Content */}
            <div className="row row__no-padding">
                <div className="col-xs-12">
                
                    <div className="row">
                        {/* Description */}
                        <div className="col-xs-12 col-md-3">
                            <strong className="color--primary">Description</strong>
                        </div>
                        <div className="col-xs-12 col-md-9">
                            <div className="row row__margin">
                                <p>
                                    <span className="color--secondary">Universal Studios Singapore</span> is Southeast Asia's first Hollywood Movie Theme Park. It is located inside the World Sentosa Resort on Sentosa Island, Singapore. Just like the Original Universal Studios in the USA, Universal Studios Singapore, features an enticing selection of attractions, hundreds of rides and various entertainment for families and thrill seekers. Go beyond the big screen and ride the Movies. Experience cutting edge roller coasters, virtual reality rides, and attractions based on your favorite blockbuster films or television shows such as Puss in Boots, Transformers, Jurassic Park, The Ultimate 3D Battle, just to name a few. This amazing theme park will awake all of your senses and give you the ultimate experience that should not be missed.
                                </p>
                                <p>
                                    There are seven movie-themed zones, and each is uniquely designed. You will find the renowned Hollywood Walk of Fame at the Hollywood zone, and as you venture into New York, the landscape evolves into impressive city skylines, including a mock-up of a subway entrance. Here, you can step onto a movie set and experience the destructive force of a hurricane with special effects produced by Steven Spielberg.
                                </p>
                            </div>

                            <div className="row row__margin">
                                <strong className="color--secondary">Breathtaking Rides</strong>
                                <p>
                                    Sci-Fi City features the famous TRANSFORMERS The Ride: The Ultimate 3D Battle ride where you fight evil forces in heart-pounding 3D combat. Move on to Ancient Egypt and face mummies and scarab beetles on an indoor roller coaster in total darkness – all the better to ignite your fears. And in Madagascar, prepare to be drenched in a wet river boat ride.
                                </p>
                            </div>

                            <div className="row row__margin">
                                <strong className="color--secondary">Thrills and spills</strong>
                                <p>
                                    Performances here are equally spectacular. The young ones will love the Shrek 4-D Adventure at Far Far Away. This fun cinematic experience allows you to physically feel the action of the movie. In the Lost World, witness death-defying stunts and explosions in Water World™, a live performance.
                                </p>
                            </div>

                            <div className="row row__margin">
                                <strong className="color--secondary">Parade And Fireworks Show</strong>
                                <p>
                                    Be amazed as the Hollywood Dreams Parade™ brings to life your favourite blockbuster movies and beloved characters on magnificent floats that go beyond your imagination in the afternoon. Then watch Lake Hollywood Spectacular, the incredible fireworks show set to a brilliant musical score that will burst across the night sky
                                </p>
                                <p>
                                    After an exhilarating day out, replenish your energy between the attractions and step in to the many themed restaurants across the parks. And make sure you have your camera ready for “celebrity” sightings. 
                                </p>
                            </div>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        {/* Additional Information */}
                        <div className="col-xs-12 col-md-3">
                            <strong className="color--primary">Additional Information</strong>
                        </div>
                        <div className="col-xs-12 col-md-9">

                            <div className="row row__margin">
                                <strong className="color--secondary">Stage Show</strong>
                                <p>
                                    When I grow up(Pantages Hollywood Theater)
                                </p>
                                <p>
                                    Donkey Live(Far Far Away) 
                                </p>
                                <p>
                                    Water World (The Lost World)
                                </p>
                            </div>

                            <div className="row row__margin">
                                <strong className="color--secondary">Street Entertainment</strong>
                                    <p>
                                        The Dance For The Magic Beans(Far Far Away)
                                    </p>
                                    <p>
                                        Sesame Street Stage Show(New York)
                                    </p>
                                    <p>
                                        The Rockafellas(New York)
                                    </p>
                                    <p>
                                        Mel's Dinettes(Hollywood)
                                    </p>
                                    <p>
                                        The Cruisers(Hollywood)
                                    </p>
                                    <p>
                                        Madagascar Boogie(Madagasca)
                                    </p>
                                    <p>
                                        Show time is change everyday depend on the weather.Please check show timetable at entrance
                                    </p>
                            </div>
                            
                        </div>
                    </div>

                    <div className="row">
                        {/* Additional Information */}
                        <div className="col-xs-12 col-md-3">
                            <strong className="color--primary">Notice</strong>
                        </div>
                        <div className="col-xs-12 col-md-9">

                            <div className="row row__margin">
                                <table className="table table-striped">
                                    <tbody>
                                        <tr>
                                            <td>Have to redeem ticket at Resort World City Tours Kiosk No.11. (basement 1 coach bay)</td>
                                        </tr>
                                        <tr>
                                            <td>Universal Studios Singapore operating hours are subject to change without prior notice.</td>
                                        </tr>
                                        <tr>
                                            <td>Mandatory Bag Checks will be conducting the bag checks upon entry.</td>
                                        </tr>
                                        <tr>
                                            <td>Prohibited items: Tools/ Chemicals/ Any form of weaponry (including but not limited to, firearms/ Explosives or flammables/ Knives or sharp objects/ Balloons/ Outside food and drinks.</td>
                                        </tr>
                                        <tr>
                                            <td>Kindly note that items which are non-threatening such as balloons/food/drinks are advised to be stored in the lockers within the park.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )

}

export default Description;