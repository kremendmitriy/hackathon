import styled from "@emotion/styled";

const BadgeContainer = ({ className, role }) => {
  return (
    <div className={className}>
      {(role === "teamlead" && (
        <div className="bages-teamlead">#TeamLead </div>
      )) ||
        (role === "student" && (
          <div className="bages-student">#Student </div>
        )) ||
        (role === "npc" && <div className="bages-npc">#NPC </div>)}
    </div>
  );
};

export const Badge = styled(BadgeContainer)`
  width: 85px;
  text-align: center;

  & .bages-teamlead {
    padding: 5px;
    border-radius: 5px;
    background-color: #f1a6a6;
  }
  & .bages-student {
    padding: 5px;
    border-radius: 5px;
    background-color: #a1eead;
  }
  & .bages-npc {
    padding: 5px;
    border-radius: 5px;
    background-color: #9d9d9d;
  }
`;
