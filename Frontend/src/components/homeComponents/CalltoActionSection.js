import React from "react";

const CalltoActionSection = () => {
  return (
    <div className="subscribe-section bg-with-black">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="subscribe-head">
              <h2>Bạn có muốn nhận thêm thông tin không?</h2>
              <p>Hãy đăng kí và nhận những thông tin mới nhất.</p>
              <form className="form-section">
                <input placeholder="Email..." name="email" type="email" />
                <input value="Có. Tôi muốn!" name="subscribe" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalltoActionSection;
