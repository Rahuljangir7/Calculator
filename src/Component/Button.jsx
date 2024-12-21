import Box from "../Box";

const initialValx = {
  x: "-10vw",
  opacity: 0,
};

const initialValy = {
  x: "10vw",
  opacity: 0,
};

export const ButtonPink = ({ btn, btnClick }) => (
  <Box
    durationTime={0.7}
    visibility={0.5}
    initialVal={initialValx}
    tag={
      <button
        onClick={btnClick}
        className="btn btn-circle font-bold text-lg btn-error"
      >
        {btn}
      </button>
    }
  />
);

export const ButtonBlue = ({ btn, btnClick }) => (
  <Box
    durationTime={0.7}
    visibility={0.5}
    initialVal={initialValy}
    tag={
      <button
        onClick={btnClick}
        className="btn btn-circle font-bold text-lg btn-info"
      >
        {btn}
      </button>
    }
  />
);

export const ButtonGreen = ({ btn, btnClick }) => (
  <Box
    durationTime={0.7}
    visibility={0.5}
    initialVal={initialValy}
    tag={
      <button
        onClick={btnClick}
        className="btn btn-circle font-bold text-lg btn-success"
      >
        {btn}
      </button>
    }
  />
);

export const ButtonBlack = ({ btn, btnClick }) => (
  <Box
    durationTime={0.7}
    visibility={0.5}
    initialVal={initialValx}
    tag={
      <button
        onClick={btnClick}
        className="btn btn-circle font-bold text-lg btn-neutral"
      >
        {btn}
      </button>
    }
  />
);

export const ButtonYellow = ({ btn, btnClick }) => (
  <Box
    durationTime={0.7}
    visibility={0.5}
    initialVal={initialValy}
    tag={
      <button
        onClick={btnClick}
        className="btn btn-circle font-bold text-lg btn-warning"
      >
        {btn}
      </button>
    }
  />
);
