import Header from "../components/Header";
import Classes from "../sass/Register.module.scss";
import starGra from "../assets/sata gra.png";
import threeD from "../assets/3d-graphic-designer-showing-thumbs-up-png 1.png";
import star from "../assets/star.png";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useEffect, useState } from "react";

const Register = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getCategoryList() {
      try {
        const res = await axios.get(
          "https://backend.getlinked.ai/hackathon/categories-list"
        );

        setData(res.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }
    getCategoryList();
  }, []);

  return (
    <>
      <Header />
      <main className={Classes["contactSection"]}>
        <img src={starGra} alt="" />
        <section className={Classes["textSection"]}>
          <img src={star} alt="" />
          <img src={threeD} alt="" />
        </section>
        <section className={Classes["formSection"]}>
          <h1>Register</h1>
          <p>Be part of this movement!...........🚶🚶</p>
          <form className={Classes["contactComponentPage"]}>
            <div className={Classes["name"]}>
              <label htmlFor="name">Team's Name</label>
              <input placeholder="Enter the name of your group" type="text" />
            </div>
            <div className={Classes["email"]}>
              <label htmlFor="email">Phone</label>
              <input placeholder="Enter your phone number" type="text" />
            </div>
            <div className={Classes["message"]}>
              <label htmlFor="message">Email</label>
              <input placeholder="Enter your email address" />
            </div>
            <div className={Classes["message"]}>
              <label htmlFor="message">Project topic</label>
              <input placeholder="What is your group project topic" />
            </div>
            <div className={Classes["message"]}>
              <label htmlFor="message">Category</label>
              <select id="dropdown" name="fruit">
                {data?.map((item: any) => {
                  return <option>{item.name}</option>;
                })}
              </select>
            </div>
            <div className={Classes["message"]}>
              <label htmlFor="message">Group size</label>
              <select id="dropdown" name="fruit">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
              </select>
            </div>
            <button className={Classes["btn"]}>Submit</button>
          </form>
          <img
            style={{
              marginTop: "1rem",
            }}
            src={starGra}
            alt=""
          />
        </section>
      </main>
    </>
  );
};

export default Register;
