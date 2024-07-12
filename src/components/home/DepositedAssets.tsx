import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/Table";

const data = [
    {
      assetName: 'WBTC',
      assetSrc: '/currencies/WBTC.svg',
      balance: '0.00',
      value: '$0.00'
    },
    {
      assetName: 'USDT',
      assetSrc: '/currencies/Tether.svg',
      balance: '0.00',
      value: '$0.00'
    },
    {
      assetName: 'USDC.e',
      assetSrc: '/currencies/USDC.svg',
      balance: '0.00',
      value: '$0.00'
    },
    {
      assetName: 'DAI',
      assetSrc: '/currencies/DAI.svg',
      balance: '0.00',
      value: '$0.00'
    },
    {
      assetName: 'ETH',
      assetSrc: '/currencies/ETH.svg',
      balance: '0.00',
      value: '$0.00'
    },
    {
      assetName: 'wstETH',
      assetSrc: '/currencies/wstETH.svg',
      balance: '0.00',
      value: '$0.00'
    },
    {
      assetName: 'ARB',
      assetSrc: '/currencies/ARB.svg',
      balance: '0.00',
      value: '$0.00'
    },
    {
      assetName: 'USDC',
      assetSrc: '/currencies/USDC.svg',
      balance: '0.00',
      value: '$0.00'
    },
    {
      assetName: 'weETH',
      assetSrc: '/currencies/weETH.png',
      balance: '0.00',
      value: '$0.00'
    },
    {
      assetName: 'gmBTC-USD',
      assetSrc: '/currencies/gmBTC-USD.svg',
      balance: '0.00',
      value: '$0.00'
    },
    {
      assetName: 'gmETH-USD',
      assetSrc: '/currencies/gmETH-USD.svg',
      balance: '0.00',
      value: '$0.00'
    }
  ];
  

export default function DepositedAssets() {
  return (
    <Table>
    <TableHeader>
      <TableRow>
        <TableHead className="w-[200px]">Assets</TableHead>
        <TableHead className="text-right w-[50px]">Balance</TableHead>
        <TableHead className="text-right w-[50px]">Value</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {data?.map((item) => (
        <TableRow key={item.assetName}>
          <TableCell className="font-medium flex gap-x-1.5 items-center"><Image width={16} height={16} src={`${item.assetSrc}`} alt={item.assetName} />{item.assetName}</TableCell>
          <TableCell className="text-right text-muted-foreground">{item.balance}</TableCell>
          <TableCell className="text-right">{item.value}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>

  );
}
