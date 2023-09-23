import Header from "../components/Header";
import Classes from "../sass/Register.module.scss";
import starGra from "../assets/sata gra.png";
import threeD from "../assets/3d-graphic-designer-showing-thumbs-up-png 1.png";
import star from "../assets/star.png";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import Module from "../components/Modal";

const Register = () => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function getCategoryList() {
      try {
        const res = await axios.get(
          "https://backend.getlinked.ai/hackathon/categories-list"
        );

        const modifiedData: any = [...res.data];

        setData(modifiedData);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }
    getCategoryList();
  }, []);

  const nameInputRef = useRef<HTMLInputElement | null>(null);
  const emailInputRef = useRef<HTMLInputElement | null>(null);
  const phoneInputRef = useRef<HTMLInputElement | null>(null);
  const topicInputRef = useRef<HTMLInputElement | null>(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [privacy, setPrivacy] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<number | any>("");

  function handleSizeChange(value: string) {
    setSelectedSize(value);
  }

  const privacyCheck = () => {
    setPrivacy(!privacy);
  };
  function submitHandler(e: any) {
    e.preventDefault();

    const enteredName = nameInputRef.current?.value;
    const enteredPhone = phoneInputRef.current?.value;
    const enteredEmail = emailInputRef.current?.value;
    const enteredTopic = topicInputRef.current?.value;

    const enteredEmailValid = enteredEmail?.includes("@");

    if (
      !enteredEmail ||
      !enteredPhone ||
      !enteredEmail ||
      !enteredTopic ||
      !enteredEmailValid ||
      selectedSize.length < 1 ||
      selectedCategory.length < 1
    ) {
      toast("Fill in all the fields");
      return;
    }
    if (enteredPhone?.length > 13) {
      toast("Phone number too long");
      return;
    }
    if (!privacy) {
      toast("Agree to all term by checking the box");
      return;
    }

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      email: enteredEmail,
      phone_number: enteredPhone,
      team_name: enteredName,
      group_size: selectedSize,
      project_topic: enteredTopic,
      category: selectedCategory,
      privacy_poclicy_accepted: privacy,
    });

    var requestOptions: object = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://backend.getlinked.ai/hackathon/registration", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
    setShowModal(true);

    if (nameInputRef.current) {
      nameInputRef.current.value = "";
    }
    if (phoneInputRef.current) {
      phoneInputRef.current.value = "";
    }
    if (emailInputRef.current) {
      emailInputRef.current.value = "";
    }
    if (topicInputRef.current) {
      topicInputRef.current.value = "";
    }
  }

  return (
    <>
      <ToastContainer />
      {showModal && <Module setShowModal={setShowModal} />}
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
          <form onSubmit={submitHandler}>
            <aside className={Classes["contactComponentPage"]}>
              <div className={Classes["name"]}>
                <label htmlFor="name">Team's Name</label>
                <input
                  placeholder="Enter the name of your group"
                  ref={nameInputRef}
                  type="text"
                />
              </div>
              <div className={Classes["email"]}>
                <label htmlFor="email">Phone</label>
                <input
                  placeholder="Enter your phone number"
                  ref={phoneInputRef}
                  type="number"
                />
              </div>
              <div className={Classes["message"]}>
                <label htmlFor="message">Email</label>
                <input
                  placeholder="Enter your email address"
                  ref={emailInputRef}
                  type="email"
                />
              </div>
              <div className={Classes["message"]}>
                <label htmlFor="message">Project topic</label>
                <input
                  ref={topicInputRef}
                  placeholder="What is your group project topic"
                />
              </div>
              <div className={Classes["message"]}>
                <label htmlFor="message">Category</label>
                <select
                  onChange={(e: any) => {
                    setSelectedCategory(parseInt(e.target.value, 10));
                  }}
                  id="dropdown"
                  name="fruit"
                  value={selectedCategory.toString()}
                >
                  <option value="">Select a category</option>
                  {data?.map((item: any) => {
                    return (
                      <option key={item.id} value={item?.id?.toString()}>
                        {item.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className={Classes["message"]}>
                <label htmlFor="message">Group size</label>
                <select
                  onChange={(e: any) => {
                    handleSizeChange(e.target.value);
                  }}
                  id="dropdown"
                  name="fruit"
                >
                  <option>Enter a group size</option>
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
            </aside>
            <p
              style={{
                fontStyle: "italic",
                color: "rgba(255, 38, 185, 1)",
              }}
            >
              Please review your registration details before submitting
            </p>
            <div className={Classes["checkBox"]}>
              <input onClick={privacyCheck} type="checkbox" />I agreed with the
              event terms and conditions and privacy policy
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
