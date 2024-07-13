import DepositedAssets from "@/components/home/DepositedAssets";
import Main from "@/components/home/main/Main";
import Right from "@/components/home/main/Right";
import OtherStats from "@/components/home/OtherStats";
import Overview from "@/components/home/Overview";
import { CardWrapper } from "@/components/ui/Card";

export default function Home() {
  return (
    <main className="my-2 md:px-10 px-2">
      <div className="mt-4 grid lg:grid-cols-2 lg:px-4 px-0.5 gap-4">
        <CardWrapper>
          <Main />
        </CardWrapper>

        <CardWrapper>
          <Right />
        </CardWrapper>
      </div>

      <div className="mt-4 grid lg:grid-cols-3 px-4 gap-4">
        <CardWrapper title="Your deposited assets">
          <DepositedAssets />
        </CardWrapper>

        <CardWrapper title="Overview">
          <Overview />
        </CardWrapper>

        <CardWrapper title="Other stats">
          <OtherStats />
        </CardWrapper>
      </div>
    </main>
  );
}
