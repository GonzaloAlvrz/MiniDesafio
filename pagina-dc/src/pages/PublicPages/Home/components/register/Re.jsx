import { React, useState } from "react";
import { useAuth } from "../../../../../context/authContext";
import { useNavigate } from "react-router-dom";
import OpenEyes from "../../img/logRe/open_eyes.svg";
import CloseEyes from "../../img/logRe/close_eyes.svg";

export default function Register({ setSignUp }) {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) =>
    setUser({ ...user, [name]: value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(user.email, user.password);
      navigate("/characters", { replace: true });
    } catch (error) {
      setError(error.message);
      navigate("/", { replace: true });
    }
  };
  return (
    <div className="w-full h-screen relative mobile:bottom-[162px] desktop-two:bottom-[126px] dark:bg-slate-800/50  bg-slate-50/50 ">
      <div className="bg-gray-300 dark:bg-slate-800 px-2 mobile:border-2 mobile:border-white mx-auto mobile:w-[370px] mobileL:w-[450px] h-[600px] relative mobile:top-10 desktop-two:top-32 flex flex-col">
        {/* x icon */}
        <div className=" flex justify-end mr-5 py-5">
          <div onClick={() => setSignUp(false)}>
            <svg
              className="fill-black dark:fill-white"
              width="28"
              height="24"
              viewBox="0 0 14 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.706 10.5366C13.7992 10.6163 13.8731 10.7109 13.9236 10.8151C13.974 10.9192 14 11.0309 14 11.1437C14 11.2565 13.974 11.3682 13.9236 11.4724C13.8731 11.5766 13.7992 11.6712 13.706 11.7508C13.5173 11.9105 13.263 12 12.9979 12C12.7328 12 12.4785 11.9105 12.2898 11.7508L7 7.21538L1.71019 11.7508C1.52155 11.9105 1.26716 12 1.0021 12C0.737049 12 0.48266 11.9105 0.294019 11.7508C0.200825 11.6712 0.126881 11.5766 0.0764264 11.4724C0.0259721 11.3682 0 11.2565 0 11.1437C0 11.0309 0.0259721 10.9192 0.0764264 10.8151C0.126881 10.7109 0.200825 10.6163 0.294019 10.5366L5.58383 6.00116L0.294019 1.46569C0.106223 1.30468 0.000720407 1.08629 0.000720407 0.858583C0.000720407 0.745832 0.0266221 0.634186 0.0769463 0.530017C0.127271 0.425849 0.201032 0.3312 0.294019 0.251473C0.387006 0.171746 0.497398 0.108504 0.618891 0.0653558C0.740385 0.022208 0.8706 0 1.0021 0C1.26769 0 1.52239 0.0904577 1.71019 0.251473L7 4.78694L12.2898 0.251473C12.4776 0.0904577 12.7323 0 12.9979 0C13.2635 0 13.5182 0.0904577 13.706 0.251473C13.8938 0.412489 13.9993 0.630873 13.9993 0.858583C13.9993 1.08629 13.8938 1.30468 13.706 1.46569L8.41617 6.00116L13.706 10.5366Z" />
            </svg>
          </div>
        </div>
        <div className=" text-center text-2xl mt-6">
          <h3>REGISTRATE EN DC UNIVERSE</h3>
        </div>
        <p className="text-center">
          ??A??n no eres miembro? <span>Crear una cuenta</span>
        </p>

        <div className="mx-auto w-full">
        {/* register form */}
          <form
            className="flex flex-col dark:text-black"
            onSubmit={handleSubmit}
          >
            <input
              onChange={handleChange}
              className="w-5/6 mx-auto my-3"
              type="email"
              name="email"
              placeholder="Introduce tu correo electr??nico"
            />

            <input
              onChange={handleChange}
              className="w-5/6 mx-auto my-3"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Introduce tu contrase??a"
            />
            <div
              className="pt-2 z-20 relative mobile:left-[290px] mobile:bottom-10 mobileL:left-[360px]"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <img src={OpenEyes} alt="Open eyes" />
              ) : (
                <img src={CloseEyes} alt="Close Eyes" />
              )}
            </div>
            {error && <p>{error}</p>}

            <div className="flex flex-row">
              <input
                type="checkbox"
                name=""
                id=""
                required
                className="ml-10 relative bottom-12 mr-2"
              />
              <p className="pr-9 text-justify w-[350px] dark:text-white">
                DC y sus afiliados de WarnerMedia pueden usar mi direcci??n de
                correo electr??nico para enviar actualizaciones , anuncios y
                ofertas.
              </p>
            </div>
            <div className="flex flex-row my-4 ">
              <input
                type="checkbox"
                name=""
                id=""
                required
                className="ml-10  mr-2"
              />
              <p className="pr-4 text-justify dark:text-white">
                Aceptos los T??rminos de uso.
              </p>
            </div>
            <button
              type="submit"
              className="w-36 h-12 bg-[#17ABEB] mx-auto rounded-full text-white"
            >
              Register
            </button>
          </form>
        </div>
        <div></div>
      </div>
    </div>
  );
}
