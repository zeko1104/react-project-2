import Button from "./Button";
import Card from "./Card";

const ErrorModal = (props) => {
  return (
    <div className="fixed top-1/4 left-0 flex justify-center mx-auto w-full z-50">
      <div
        className="backdrop-blur-sm bg-white/30 fixed h-screen w-screen top-0"
        onClick={props.onConfirm}
      ></div>
      <Card className="w-[36rem] !p-0 z-20">
        <header className="bg-red-600 p-4 rounded-t-xl">
          <h1 className="text-center text-xl text-white">
            {props.error.title}
          </h1>
        </header>
        <section className="p-4">{props.error.message}</section>
        <footer className="p-4 flex justify-end">
          <Button className="w-32" onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
