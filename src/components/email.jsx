import React, { useState } from "react";

export default () => {
  const [open, setOpen] = useState(true);
  const getRandomEmail = () => {};
  return (
    <div className="modal">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true"></span>
            </button>
          </div>
          <div className="modal-body">
            <p>Modal body text goes here.</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary">
              Reply
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => {
                setOpen(false);
              }}
            >
              Discard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
