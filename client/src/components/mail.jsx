import { Link } from "react-router-dom";
import { Trash2 } from "lucide-react";

const Mail = ({ mailId, subject, sender, receiver, sendDate, receiveDate, status, factor }) => {
    const getStatus = (status) => {
        switch (status.toLowerCase()) {
            case "delivered":
                return ["badge-success", "Livré"]; // Green for delivered
            case "in transit":
                return ["badge-warning", "En transit"]; // Yellow for in transit
            case "pending":
                return ["badge-info", "En attente"]; // Blue for pending
            case "returned":
                return ["badge-error", "Retourné"]; // Red for returned
            default:
                return "badge-secondary"; // Grey for unknown
        }
    };

    return (
        <tr>
            <th>{mailId}</th>
            <td>
                <div className="flex-col gap-2">
                    <div className="text-lg font-bold">{sender.name}</div>
                    <div className="text-xs">{sender.address}</div>
                    <div className="text-xs">{sender.phoneNumber}</div>
                </div>
            </td>
            <td>
                <div className="text-lg font-bold">{receiver.name}</div>
                <div className="text-xs">{receiver.address}</div>
                <div className="text-xs">{receiver.phoneNumber}</div>
            </td>
            <td>{subject}</td>
            <td>
                {sendDate.date} <span className="badge badge-md font-semibold">{sendDate.time}</span>
            </td>
            <td>
                {receiveDate.date} <span className="badge badge-md font-semibold">{receiveDate.time}</span>
            </td>
            <td>
                <span className={`badge badge-outline ${getStatus(status)[0]}`}>{getStatus(status)[1]}</span>
            </td>
            <td>
                <div className="flex flex-col items-center gap-1">
                    <Link href={""} className="avatar">
                        <div className="w-8 rounded-full overflow-hidden">
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </Link>
                    <div className="text-xs">
                        id: <span className="font-bold">{factor.id}</span>
                    </div>
                </div>
            </td>
            <td>
                <div className="w-full h-full flex gap-2">
                    <button
                        className="btn btn-primary btn-xs"
                        onClick={() => document.getElementById("editMailModal" + mailId).showModal()}
                    >
                        modifier
                    </button>
                    <button className="btn btn-outline btn-error btn-xs">
                        <Trash2 className="w-3 h-3"></Trash2>
                    </button>
                </div>
            </td>
            <th>{factor.id}</th>
        </tr>
    );
};

export default Mail;
