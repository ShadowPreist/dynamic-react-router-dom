import React, { useState } from "react";

const User = ({ userId }) => {
  let userName = "unknown"

    switch (userId) {
      case 1:
        userName = "Aung Aung"
        break;
      case 2:
         userName = "Mg Mg"
        break;
      case 3:
         userName = "Hsu Hsu"
        break;
      case 4:
        userName = "Hla Hla"
        break;
      case 5:
         userName = "Zaw Zaw"
        break;
    }

  return (
    <div>
      <p>Posted by {userName}</p>
    </div>
  );
};

export default User;
