import { Avatar } from "components";
import styled from "styled-components";

export const AccountTemplate = () => {
  return (
    <Account>
      <div className="grid grid-cols-12 gap-4 content">
        <div className="col-span-3">
          <div className="informartion">
            <Avatar>
              <i className="fa-regular fa-user"></i>
            </Avatar>
            <h1>UserName</h1>
            <button>
              <i className="fa-solid fa-pen"></i>
            </button>
            <div className="from-since">
              <div>
                <i className="fa-solid fa-location-dot"></i>
                <span>From</span>
              </div>

              <h1>Vietnam</h1>
            </div>
            <div className="from-since">
              <div>
                <i className="fa-solid fa-user-large"></i>
                <span>Member Since</span>
              </div>
              <h1>DateTime</h1>
            </div>
          </div>
          <div className="account-contact">
            <div className="account-title">
              <div className="title-account">
                <h1>Description</h1>
                <button>Edit Description</button>
              </div>
              <div className="title-content"></div>
            </div>
            <div className="account-title">
              <div className="title-account">
                <h1>Language</h1>
                <button>Add Now</button>
              </div>
              <div className="title-content"></div>
            </div>
            <div className="account-title">
              <div className="title-account">
                <h1>Link Account</h1>
                <button>Add Now</button>
              </div>
              <div className="title-content"></div>
            </div>
            <div className="account-title">
              <div className="title-account">
                <h1>Skill</h1>
                <button>Add Now</button>
              </div>
              <div className="title-content"></div>
            </div>
            <div className="account-title">
              <div className="title-account">
                <h1>Education</h1>
                <button>Add Now</button>
              </div>
              <div className="title-content"></div>
            </div>
            <div className="">
              <div className="title-account del">
                <h1>Cetification</h1>
                <button>Add Now</button>
              </div>
              <div className="title-content"></div>
            </div>
          </div>
        </div>
        <div className="col-span-9">
          <div className="list-job">
            <h1>It seems that you don't have any active Gigs. Get selling</h1>
            <button>Create a New Gig</button>
          </div>
        </div>
      </div>
    </Account>
  );
};

const Account = styled.div`
  background-color: #e8e6e6;
  height: 150vh;
  .content {
    max-width: 900px;
    margin: 0 auto;
  }
  .informartion {
    height: 250px;
    text-align: center;
    background-color: white;
    margin-top: 50px;
    padding-top: 10px;
    border: var(--account-boder);
    box-shadow: var(--account-box-shadow);

    .ant-avatar {
      font-size: 50px;
      width: 100px;
      height: 100px;
      line-height: 100px;
      margin-bottom: 20px;
    }
    .from-since {
      display: flex;
      justify-content: space-between;
      padding: 5px 10px;
      font-size: var(--account-font-size);

      i {
        margin-right: 5px;
      }
      span {
        color: gray;
      }
      h1 {
        font-weight: var(--account-font-bold);
      }
    }
  }
  .account-contact {
    border: 1px solid black;
    background-color: white;
    padding: 10px;
    margin-top: 20px;
    box-shadow: var(--account-box-shadow);
    font-size: var(--account-font-size);
    .account-title {
      &::after {
        content: "";
        display: block;
        width: 100%;
        height: 2px;
        background-color: #d2cbcb;
      }
    }

    .title-account {
      display: flex;
      justify-content: space-between;
    }
    h1 {
      font-weight: var(--account-font-bold);
    }
    button {
      color: #4d4df7;
    }
    .title-content {
      color: var(--account-color-span);
      font-size: var(--account-font-size);
    }

    .title-content {
      height: 30px;
    }
  }
  .list-job{
    text-align: center;
    background-color: white;
    display: flex;
    justify-content: space-between;
    padding: 20px 15px;
    margin-top: 50px;
    border: var(--account-boder);
    font-size: var(--account-font-size);

    button{
      background-color: var(--button-bgColor);
      color: var(--button-color);
      border: var(--button-boder);
      padding: var(--button-padding);
      border-radius: var(--button-radius);
    }
  }
`;
