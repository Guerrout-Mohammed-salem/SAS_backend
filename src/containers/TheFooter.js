import React from "react";
import { CFooter } from "@coreui/react";

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          SAS
        </a>
        <span className="ml-1">&copy; 2021 Crafted by DAFI && Benlaria</span>
      </div>
    </CFooter>
  );
};

export default React.memo(TheFooter);
