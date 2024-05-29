import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useSelector } from "react-redux";
import List from "../ListProducts/List";
import Link from "next/link";

const Sheets = () => {
  const cart = useSelector((state) => state.cart.products);
  const totalPrice =
    cart.length > 0
      ? cart.reduce(
          (acc, product) => (acc = acc + product.price * product.count),
          0
        )
      : "no hay";
  const totalQuantity =
    cart.length > 0 && cart.reduce((acc, prod) => (acc = acc + prod.count), 0);
  console.log(cart);
  console.log(totalPrice);

  return (
    <Sheet>
      <SheetTrigger>Cart</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
          <SheetDescription>
            {cart.length < 0 ? (
              "no hay productos"
            ) : (
              <div className="flex flex-col gap-4">
                <List products={cart} />
                <SheetFooter className="b-0">
                  <div className="flex flex-col top-shadow h-[150px] justify-between b w-full  py-4 px-4  ">
                    <div className="flex  items-center justify-between py-2">
                      <p className="text-[15px]">
                        Subtotal{" "}
                        <span className="">({totalQuantity} items)</span>
                      </p>
                      <p className="px-4 text-[15px]">${totalPrice}</p>
                    </div>
                    <div>
                      <Link href={"/checkout"}>
                        <SheetClose className="bg-red-500 w-full">
                          <button className="bg-slate-900 py-2 text-white w-full ">
                            Continue To Checkout
                          </button>
                        </SheetClose>
                      </Link>
                    </div>
                    <div>
                      <SheetClose>
                        <p className="text-center text-[15px] cursor-pointer">
                          Continue Shopping
                        </p>
                      </SheetClose>
                    </div>
                  </div>
                </SheetFooter>
              </div>
            )}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Sheets;
