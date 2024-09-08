import styled from "styled-components";

const HomePageContainer = ({ className }) => {
  return (
    <div className={className}>
      <h1>Привет!</h1>
      <div className="text">
        Мы — студенты Result University, и мы решили стать разработчиками.
        <br /> Мы выбрали этот путь, потому что верим в силу технологий и их
        способность менять мир к лучшему. <br />
        Здесь ты сможешь познакомиться с нами и узнать больше о наших навыках.
      </div>
      <img
        src="https://onlypult.com/blog_uploads/203acb8aadafa63cc52f14b87a85c8a8.png"
        alt="Students"
      />
      <button className="meet-button">Давай знакомиться</button>
    </div>
  );
};

export const HomePage = styled(HomePageContainer)`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  max-height: 100%;
  align-items: center;
  background-color: #f9f9f9;
  padding: 50px;
  text-align: center;

  & h1 {
    font-size: 36px;
    color: #333;
    margin-bottom: 20px;
  }

  & .text {
    max-width: 900px;
    font-size: 18px;
    line-height: 1.6;
    color: #555;
    margin-bottom: 30px;
  }

  & img {
    width: 500px;
    height: auto;
    margin-bottom: 30px;
  }

  & .meet-button {
    font-size: 18px;
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }
  }
`;
