"use client";

import { AlertDialog, Button } from "@heroui/react";
import { FaTrash } from "react-icons/fa";

export function CancelAlertModal({ booking }) {
  //   console.log(userId);
  const hendelCancleBooking = async () => {
    const res = await fetch(`http://localhost:5000/booking/${booking}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    // console.log(data);
    window.location.reload();
  };
  return (
    <AlertDialog>
      <Button
        variant="outline"
        className={" rounded-none border-red-500 text-red-500"}
      >
        <FaTrash></FaTrash> Cancle
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete project permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>My Awesome Project</strong>{" "}
                and all of its data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button
                onClick={hendelCancleBooking}
                slot="close"
                variant="danger"
              >
                Delete Project
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
