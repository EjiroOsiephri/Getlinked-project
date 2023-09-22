import Classes from "../sass/Timeline.module.scss";

const Timeline = () => {
  return (
    <>
      <div className={Classes["time-text"]}>
        <h1>Timeline</h1>
        <p>
          Here is the breakdown of the time we anticipate using for the upcoming
          event.
        </p>
      </div>
      <main className={Classes["timeline"]}>
        <section className={Classes["firstTimeline"]}>
          <div className={Classes["container"]}>
            <aside className={Classes["aside-line"]}>
              <div className={Classes["line-purple"]}></div>
              <div className={Classes["line-text"]}>
                <p>1</p>
              </div>
            </aside>
            <section className={Classes["flexContainer"]}>
              <div className={Classes["aside-class"]}>
                <h1>Hackathon Announcement</h1>
                <p>
                  The getlinked tech hackathon 1.0 is formally announced to the
                  general public and teams begin to get ready to register
                </p>
              </div>
              <div className={Classes["container-div"]}>
                <h1>November 18, 2023</h1>
              </div>
            </section>
          </div>
          <div className={Classes["container"]}>
            <aside className={Classes["aside-line"]}>
              <div className={Classes["line-purple"]}></div>
              <div className={Classes["line-text"]}>
                <p>2</p>
              </div>
            </aside>
            <section className={Classes["flexContainer"]}>
              <div className={Classes["container-div"]}>
                <h1>November 18, 2023</h1>
              </div>
              <div className={Classes["aside-class"]}>
                <h1>Teams Registration begins</h1>
                <p>
                  Interested teams can now show their interest in the getlinked
                  tech hackathon 1.0 2023 by proceeding to register
                </p>
              </div>
            </section>
          </div>
          <div className={Classes["container"]}>
            <aside className={Classes["aside-line"]}>
              <div className={Classes["line-purple"]}></div>
              <div className={Classes["line-text"]}>
                <p>3</p>
              </div>
            </aside>
            <section className={Classes["flexContainer"]}>
              <div className={Classes["aside-class"]}>
                <h1>Teams Registration ends</h1>
                <p>Interested Participants are no longer Allowed to register</p>
              </div>
              <div className={Classes["container-div"]}>
                <h1>November 18, 2023</h1>
              </div>
            </section>
          </div>

          <div className={Classes["container"]}>
            <aside className={Classes["aside-line"]}>
              <div className={Classes["line-purple"]}></div>
              <div className={Classes["line-text"]}>
                <p>4</p>
              </div>
            </aside>
            <section className={Classes["flexContainer"]}>
              <div className={Classes["container-div"]}>
                <h1>November 18, 2023</h1>
              </div>
              <div className={Classes["aside-class"]}>
                <h1>Announcement of the accepted teams and ideas</h1>
                <p>
                  All teams whom idea has been accepted into getlinked tech
                  hackathon 1.0 2023 are formally announced
                </p>
              </div>
            </section>
          </div>
          <div className={Classes["container"]}>
            <aside className={Classes["aside-line"]}>
              <div className={Classes["line-purple"]}></div>
              <div className={Classes["line-text"]}>
                <p>5</p>
              </div>
            </aside>
            <section className={Classes["flexContainer"]}>
              <div className={Classes["aside-class"]}>
                <h1>Getlinked Hackathon 1.0 Offically Begins</h1>
                <p>
                  Accepted teams can now proceed to build their ground breaking
                  skill driven solutions
                </p>
              </div>
              <div className={Classes["container-div"]}>
                <h1>November 18, 2023</h1>
              </div>
            </section>
          </div>

          <div className={Classes["container"]}>
            <aside className={Classes["aside-line"]}>
              <div className={Classes["line-purple"]}></div>
              <div className={Classes["line-text"]}>
                <p>6</p>
              </div>
            </aside>
            <section className={Classes["flexContainer"]}>
              <div className={Classes["container-div"]}>
                <h1>November 18, 2023</h1>
              </div>
              <aside className={Classes["aside-class"]}>
                <h1>Demo Day</h1>
                <p>
                  Teams get the opportunity to pitch their projects to judges.
                  The winner of the hackathon will also be announced on this day
                </p>
              </aside>
            </section>
          </div>
        </section>
      </main>
    </>
  );
};

export default Timeline;
