"use client";
import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
  Typography,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Select,
  Option,
} from "@material-tailwind/react";
import {
  BanknotesIcon,
  CreditCardIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";

function formatCardNumber(value) {
  const val = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
  const matches = val.match(/\d{4,16}/g);
  const match = (matches && matches[0]) || "";
  const parts = [];

  for (let i = 0, len = match.length; i < len; i += 4) {
    parts.push(match.substring(i, i + 4));
  }

  if (parts.length) {
    return parts.join(" ");
  } else {
    return value;
  }
}

function formatExpires(value) {
  return value
    .replace(/[^0-9]/g, "")
    .replace(/^([2-9])$/g, "0$1")
    .replace(/^(1{1})([3-9]{1})$/g, "0$1/$2")
    .replace(/^0{1,}/g, "0")
    .replace(/^([0-1]{1}[0-9]{1})([0-9]{1,2}).*/g, "$1/$2");
}

const CheckoutForm = () => {
  const [type, setType] = React.useState("card");
  const [cardNumber, setCardNumber] = React.useState("");
  const [cardExpires, setCardExpires] = React.useState("");

  return (
    <Card className="w-full md:w-[80%] h-auto my-6">
      <CardHeader
        floated={false}
        shadow={false}
        className="m-0 grid place-items-center px-4 py-2 text-center"
      >
        <Typography variant="h5" color="black">
          Material Tailwind PRO
        </Typography>
      </CardHeader>
      <CardBody className="h-full">
        <Tabs value={type} className="h-full">
          <TabsHeader className="relative z-0 ">
            <Tab value="card" onClick={() => setType("card")}>
              Pay with Card
            </Tab>
            <Tab value="paypal" onClick={() => setType("paypal")}>
              Pay with PayPal
            </Tab>
          </TabsHeader>
          <TabsBody
            className="!overflow-x-hidden h-full !overflow-y-visible"
            animate={{
              initial: {
                x: type === "card" ? 400 : -400,
              },
              mount: {
                x: 0,
              },
              unmount: {
                x: type === "card" ? 400 : -400,
              },
            }}
          >
            <TabPanel value="card" className="p-0">
              <form className="mt-12 flex flex-col gap-4">
                <div className="w-full">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-2 font-medium"
                  >
                    Nama Lengkap
                  </Typography>

                  <Input label="Email" />
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center gap-2">
                  <div className="flex flex-col w-full xl:flex-row gap-2">
                    <div className="w-full">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="mb-2 font-medium"
                      >
                        NIM/NPM
                      </Typography>

                      <Input label="Email" />
                    </div>
                    <div className="w-full">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="mb-2 font-medium"
                      >
                        Tahun Lulus
                      </Typography>

                      <Input label="Email" />
                    </div>
                  </div>
                  <div className="flex flex-col xl:flex-row w-full gap-2">
                    <div className="w-full">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="mb-2 font-medium"
                      >
                        Kode PT
                      </Typography>

                      <Input label="Email" />
                    </div>
                    <div className="w-full">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="mb-2 font-medium"
                      >
                        Kode Prodi
                      </Typography>

                      <Input label="Email" />
                    </div>
                  </div>
                </div>

                <div className="my-3">
                  <div className="flex flex-col w-full xl:flex-row gap-2">
                    <div className="w-full">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="mb-2 font-medium"
                      >
                        NIM/NPM
                      </Typography>

                      <Input label="Email" />
                    </div>
                    <div className="w-full">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="mb-2 font-medium"
                      >
                        Tahun Lulus
                      </Typography>

                      <Input label="Email" />
                    </div>
                  </div>
                </div>
                <div className="my-3">
                  <div className="flex flex-col w-full xl:flex-row gap-2">
                    <div className="w-full">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="mb-2 font-medium"
                      >
                        NIM/NPM
                      </Typography>

                      <Input label="Email" />
                    </div>
                    <div className="w-full">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="mb-2 font-medium"
                      >
                        Tahun Lulus
                      </Typography>

                      <Input label="Email" />
                    </div>
                  </div>
                </div>
              </form>
              <Button size="lg">Pay Now</Button>
            </TabPanel>
          </TabsBody>
        </Tabs>
      </CardBody>
    </Card>
  );
};

export default CheckoutForm;
