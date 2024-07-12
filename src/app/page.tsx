import DepositedAssets from "@/components/home/DepositedAssets";
import Main from "@/components/home/main/Main";
import Right from "@/components/home/main/Right";
import OtherStats from "@/components/home/OtherStats";
import Overview from "@/components/home/Overview";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

export default function Home() {
  return (
    <main className="my-2">
      <div className="border-b py-2 px-4">
        <Navbar />
      </div>
      <div className="md:px-10 px-2">
        <div className="mt-4 grid lg:grid-cols-2 px-4 gap-4">
        <Card className="rounded-2xl">
            <CardContent className="h-full">
            <Main />
            </CardContent>
          </Card>
          <Card className="rounded-2xl h-full">
            <CardContent className="h-full">
            <Right />
            </CardContent>
          </Card>
        </div>
        <div className="mt-4 grid md:grid-cols-3 px-4 gap-4">
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Your deposited assets</CardTitle>
            </CardHeader>
            <CardContent className="border-t pt-3">
              <DepositedAssets />
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent className="border-t pt-3">
              <Overview />
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Other stats</CardTitle>
            </CardHeader>
            <CardContent className="border-t pt-3">
              <OtherStats />
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
