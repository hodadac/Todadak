import Image from "next/image";

export default function Home() {
  return (
    <>
      토다닥 Root Page test
      <br>
      </br>
      <Image
        src="/burger.png"
        alt="burgerYeah"
        width={500}
        height={300}
      />
      <br>
      </br>
      <Image
        src="/eatBurger.gif"
        alt="eatBurgerYeah"
        width={500}
        height={300}
      />
    <br>test 1</br>
    </>
  );
}
