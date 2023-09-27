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
            
          </div>
        </div>
        <div className="col-span-9">About</div>
      </div>
    </Account>
  );
};

const Account = styled.div`
  background-color: #e8e6e6;
  height: 100vh;
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
      font-size: 13px;

      i {
        margin-right: 5px;
      }
      span {
        color: gray;
      }
      h1 {
        font-weight: bold;
      }
    }
  }
`;
