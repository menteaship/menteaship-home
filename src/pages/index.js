/**
 * Created by Andrew Bell 07/07/18
 * www.recursivechaos.com
 * andrew@recursivechaos.com
 * Licensed under MIT License 2018. See LICENSE.txt for details.
 */
import React from 'react';

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="text-center">
          <main role="main">
            <div className="jumbotron">
              <div className="container-fluid">
                <h1 className="display-3">
                  Welcome to men<i>tea</i>ship
                </h1>
                <p>We're building a community of inclusive and supportive developers.</p>
                <p>
                  <a
                    className="btn btn-secondary btn-lg"
                    href="http://email.menteaship.com"
                    role="button"
                    target="_blank"
                  >
                    Subscribe for Updates
                  </a>
                </p>
              </div>
            </div>

            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <h2>Mission</h2>
                  <p>
                    The men<i>tea</i>ship community is building casual and inclusive environments
                    for developers to support and mentor one another. We believe that developers of
                    every skill level need time to share, listen, and connect with fellow developers
                    for mentorship.{' '}
                  </p>
                </div>
                <div className="col-md-4">
                  <h2>Meetup</h2>
                  <p>
                    men<i>tea</i>ship meets once a month to share tea (and coffee) and have a
                    round-table discussion using{' '}
                    <a href="http://leancoffee.org/" target="_blank">
                      Lean Coffee
                    </a>{' '}
                    to crowdsource topics.{' '}
                  </p>
                  <p>
                    <a
                      className="btn btn-secondary btn-lg"
                      href="http://email.menteaship.com"
                      role="button"
                      target="_blank"
                    >
                      Subscribe for Updates
                    </a>
                  </p>
                </div>
                <div className="col-md-4">
                  <h2>Chat</h2>
                  <p>
                    You can find us on STLTech Slack under the #menteaship channel. We'd love for
                    you to join, ask questions, and share your experiences!
                  </p>
                  <p>
                    <a
                      className="btn btn-secondary"
                      href="https://stltech.org/"
                      target="_blank"
                      role="button"
                    >
                      Join Slack &raquo;
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}
