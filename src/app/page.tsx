import DepositedAssets from "@/components/home/DepositedAssets";
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
        {/* <div className="mt-4 grid md:grid-cols-2 px-4 gap-2">
          
        </div> */}
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
            <CardContent className="border-t"></CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
