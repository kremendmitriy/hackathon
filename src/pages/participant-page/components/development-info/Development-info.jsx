import styled from "styled-components";

const DevelopmentInfoContainer = ({ className }) => {
  return (
    <div className={className}>
      <div className="main-info">
        <div className="what-you-do">Что ты сделал для хип хопа: </div>

        <div className="about">
          О себе: Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Incidunt id, tempora quod deserunt, omnis minus assumenda voluptates
          ducimus facilis necessitatibus tenetur asperiores, vero sed voluptate
          eveniet ea dolorum tempore beatae. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Ex officiis aspernatur beatae itaque
          dolore aliquam aperiam illum possimus sunt earum! Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Eum deserunt perferendis
          incidunt beatae ea velit quisquam animi aperiam facilis cum!
        </div>
      </div>
    </div>
  );
};

export const DevelopmentInfo = styled(DevelopmentInfoContainer)`
  display: flex;
  margin: 20px 0;
  justify-content: space-between;
  padding: 40px 20px;
  width: 900px;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  & .image {
    flex: 0 0 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
  }

  & .main-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 20px;
    background: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  & .what-you-do {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  & .about {
    font-size: 14px;
    margin-bottom: 20px;
  }
`;
