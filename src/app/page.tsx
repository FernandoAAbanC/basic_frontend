import Image from "next/image";
import Header from "@/components/header/header";

export default function Home() {
  return (
    <>
    <Header />
    <main className="flex min-h-screen flex-col justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono lg:flex">
      <div className="relative overflow-x-auto w-full">
    <table className="w-full text-left">
        <thead className="uppercase">
            <tr>
                <th scope="col" className="px-6 py-3">
                  lorem ipsum
                </th>
                <th scope="col" className="px-6 py-3">
                  lorem ipsum
                </th>
                <th scope="col" className="px-6 py-3">
                  lorem ipsum
                </th>
                <th scope="col" className="px-6 py-3">
                  lorem ipsum
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b">
                <th scope="row" className="px-6 py-4 whitespace-nowrap">
                  dolor sit amet
                </th>
                <td className="px-6 py-4">
                dolor sit amet
                </td>
                <td className="px-6 py-4">
                dolor sit amet
                </td>
                <td className="px-6 py-4">
                dolor sit amet
                </td>
            </tr>
            <tr className="bg-white border-b">
                <th scope="row" className="px-6 py-4 whitespace-nowrap">
                  dolor sit amet
                </th>
                <td className="px-6 py-4">
                dolor sit amet
                </td>
                <td className="px-6 py-4">
                dolor sit amet
                </td>
                <td className="px-6 py-4">
                dolor sit amet
                </td>
            </tr>
            <tr className="bg-white border-b">
                <th scope="row" className="px-6 py-4 whitespace-nowrap">
                  dolor sit amet
                </th>
                <td className="px-6 py-4">
                dolor sit amet
                </td>
                <td className="px-6 py-4">
                dolor sit amet
                </td>
                <td className="px-6 py-4">
                dolor sit amet
                </td>
            </tr>
            <tr className="bg-white border-b">
                <th scope="row" className="px-6 py-4 whitespace-nowrap">
                  dolor sit amet
                </th>
                <td className="px-6 py-4">
                dolor sit amet
                </td>
                <td className="px-6 py-4">
                dolor sit amet
                </td>
                <td className="px-6 py-4">
                dolor sit amet
                </td>
            </tr>
            <tr className="bg-white border-b">
                <th scope="row" className="px-6 py-4 whitespace-nowrap">
                  dolor sit amet
                </th>
                <td className="px-6 py-4">
                dolor sit amet
                </td>
                <td className="px-6 py-4">
                dolor sit amet
                </td>
                <td className="px-6 py-4">
                dolor sit amet
                </td>
            </tr>
        </tbody>
    </table>
</div>
      </div>

      
    </main>
    </>
  );
}
