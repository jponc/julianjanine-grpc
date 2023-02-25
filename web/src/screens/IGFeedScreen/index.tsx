import React, { useEffect, useState } from "react";
import { Container } from "../../components/Container";
import { GetInstagramFeedRequest } from "../../protos/api_pb";
import { apiClient } from "../../services/api";

export const IGFeedScreen = () => {
  const [urls, setUrls] = useState<string[]>([]);
  useEffect(() => {
    require("../../script");
  }, []);

  useEffect(() => {
    getRecentFeeds();
  }, []);

  const getRecentFeeds = async () => {
    const hashtag = "maroubra";

    const req = new GetInstagramFeedRequest();
    req.setHashtag(hashtag);

    try {
      const res = await apiClient.getInstagramFeed(req, {});
      const newUrls = res.getUrlsList();
      setUrls(newUrls);
      console.log(newUrls);
    } catch {
      alert(
        "Something went wrong. Please message Julian or Janine on Facebook Messenger."
      );
    }
  };

  return (
    <Container screen="IGFeed">
      <div
        className="ready banner-padding bg-img"
        data-overlay-light="0"
        data-background="https://ik.imagekit.io/jponc/julianjanine/igfeed.jpg?tr=w-2000"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div
                className="cat text-center animate-box fadeInUp animated"
                data-animate-effect="fadeInUp"
              >
                {" "}
                <span>#JulianJanineSayIDo</span>
                <hr className="line line-hr-center" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-padding">
        <div className="container dress-code-container">
          <div className="row">
            <div className="col-md-12">
              <p>
                Please use our hashtag #JulianJanineSayIDo. This feed will only
                show images coming from public accounts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
