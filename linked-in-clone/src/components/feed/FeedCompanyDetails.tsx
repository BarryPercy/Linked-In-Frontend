const FeedCompanyDetails = () => {
    return (
      <div
        className="bg-white mt-2"
        style={{
          borderRadius: "10px",
          overflow: "hidden",
          border: "1px solid lightgrey",
        }}
      >
        {/* Company Logo */}
        <div
          style={{ height: "48px" }}
          className={"d-flex p-feed-left p-feed-top align-items-center"}
        >
          <img
            src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/032015/bestseller_logo_vektor.png?itok=vzl_ibyV"
            alt="logo"
            style={{ width: "48px" }}
          />
        </div>
        <div className="p-feed-x p-feed-bottom" style={{ fontWeight: "500" }}>
          Bestseller
        </div>
        <div
          style={{ width: "48px", marginLeft: "12px" }}
          className="border-bottom"
        ></div>
        {/* Center elements */}
        <div className="p-feed-y border-bottom">
          <div className="d-flex mb-2 align-items-center justify-content-between p-feed-x">
            <div
              style={{ fontSize: "12px", color: "grey", fontWeight: "500" }}
              className={""}
            >
              Page notifications
            </div>
            <div
              style={{ fontSize: "12px", fontWeight: "500" }}
              className={"text-primary"}
            >
              91
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-between p-feed-x">
            <div
              style={{ fontSize: "12px", color: "grey", fontWeight: "500" }}
              className={"cursor-pointer"}
            >
              Page visitors
            </div>
            <div
              style={{ fontSize: "12px", fontWeight: "500" }}
              className={"text-primary"}
            >
              39
            </div>
          </div>
        </div>
        <div
          className="d-flex justify-content-center align-items-center p-feed-y"
          style={{ fontSize: "12px", fontWeight: "500" }}
        >
          See visitor analytics
        </div>
      </div>
    );
  };
  
  export default FeedCompanyDetails;