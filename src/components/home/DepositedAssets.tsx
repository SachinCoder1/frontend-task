import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/Table";
import { depositedAssetsData } from "@/lib/data/deposited-assets";

export default function DepositedAssets() {
  return (
    <Table className="w-full">
      <TableHeader>
        <TableRow>
          <TableHead className="w-full">Assets</TableHead>
          <TableHead className="text-right">Balance</TableHead>
          <TableHead className="text-right">Value</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {depositedAssetsData?.map((item) => (
          <TableRow key={item.assetName}>
            <TableCell className="font-medium flex gap-x-1.5 items-center">
              <Image
                width={16}
                height={16}
                src={`${item.assetSrc}`}
                alt={item.assetName}
              />
              {item.assetName}
            </TableCell>
            <TableCell className="text-right text-muted-foreground">
              {item.balance}
            </TableCell>
            <TableCell className="text-right">{item.value}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
