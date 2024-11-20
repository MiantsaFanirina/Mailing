import Mail from "../components/mail.jsx";
import {useEffect, useState} from "react";
import {MailPlus, Frown} from "lucide-react";
import MailEdit from "../components/mailEdit.jsx";
import MailAdd  from "../components/mailAdd.jsx";

const mails = [
    {
        mailId: 1,
        subject: 'Test mail',
        sender: { name: "John Doe", address: "123 Elm St, Springfield", phoneNumber: "555-1234" },
        receiver: { name: "Jane Smith", address: "456 Oak St, Shelbyville", phoneNumber: "555-5678" },
        sendDate: { date: "2024-11-15", time: "10:30" },
        receiveDate: { date: "2024-11-16", time: "02:45" },
        status: "Delivered",
        factor: { id: "F001" },
    },
    {
        mailId: 2,
        subject: 'Test mail',
        sender: { name: "Alice Johnson", address: "789 Maple Ave, Capital City", phoneNumber: "555-8765" },
        receiver: { name: "Bob Brown", address: "321 Pine Rd, Ogdenville", phoneNumber: "555-4321" },
        sendDate: { date: "2024-11-14", time: "03:00" },
        receiveDate: { date: "2024-11-15", time: "12:15" },
        status: "In Transit",
        factor: { id: "F002" },
    },
    {
        mailId: 3,
        subject: 'Test mail',
        sender: { name: "Charlie Black", address: "654 Cedar Dr, North Haverbrook", phoneNumber: "555-6789" },
        receiver: { name: "Diana White", address: "987 Birch Ln, Springfield", phoneNumber: "555-8760" },
        sendDate: { date: "2024-11-12", time: "01:30" },
        receiveDate: { date: "2024-11-13", time: "09:00" },
        status: "Pending",
        factor: { id: "F003" },
    },
    {
        mailId: 4,
        subject: 'Test mail',
        sender: { name: "Emily Green", address: "159 Aspen Blvd, Capital City", phoneNumber: "555-3456" },
        receiver: { name: "Frank Blue", address: "753 Cherry St, Shelbyville", phoneNumber: "555-7890" },
        sendDate: { date: "2024-11-10", time: "10:00" },
        receiveDate: { date: "2024-11-11", time: "03:30" },
        status: "Delivered",
        factor: { id: "F004" },
    },
    {
        mailId: 5,
        subject: 'Test mail',
        sender: { name: "Grace Red", address: "963 Willow Way, Ogdenville", phoneNumber: "555-0987" },
        receiver: { name: "Harry Orange", address: "258 Elm St, Springfield", phoneNumber: "555-6543" },
        sendDate: { date: "2024-11-09", time: "02:15" },
        receiveDate: { date: "2024-11-10", time: "08:45" },
        status: "Returned",
        factor: { id: "F005" },
    },
    {
        mailId: 6,
        subject: 'Test mail',
        sender: { name: "Ivy Violet", address: "147 Redwood Ln, Shelbyville", phoneNumber: "555-3210" },
        receiver: { name: "Jack Gray", address: "369 Poplar St, Ogdenville", phoneNumber: "555-5432" },
        sendDate: { date: "2024-11-08", time: "04:30" },
        receiveDate: { date: "2024-11-09", time: "11:00" },
        status: "In Transit",
        factor: { id: "F006" },
    },
    {
        mailId: 7,
        subject: 'Test mail',
        sender: { name: "Karen Indigo", address: "789 Cypress Ave, North Haverbrook", phoneNumber: "555-2345" },
        receiver: { name: "Liam Brown", address: "123 Fir St, Capital City", phoneNumber: "555-3450" },
        sendDate: { date: "2024-11-07", time: "09:00" },
        receiveDate: { date: "2024-11-08", time: "06:00" },
        status: "Delivered",
        factor: { id: "F007" },
    },
    {
        mailId: 8,
        subject: 'Test mail',
        sender: { name: "Mia Rose", address: "456 Spruce Rd, Springfield", phoneNumber: "555-7654" },
        receiver: { name: "Nathan Black", address: "321 Cedar Ln, Shelbyville", phoneNumber: "555-5670" },
        sendDate: { date: "2024-11-06", time: "12:00" },
        receiveDate: { date: "2024-11-07", time: "04:30" },
        status: "Pending",
        factor: { id: "F008" },
    },
    {
        mailId: 9,
        subject: 'Test mail',
        sender: { name: "Olivia Gold", address: "963 Maple Ave, Ogdenville", phoneNumber: "555-8764" },
        receiver: { name: "Paul Silver", address: "159 Pine Rd, Springfield", phoneNumber: "555-6547" },
        sendDate: { date: "2024-11-05", time: "07:45" },
        receiveDate: { date: "2024-11-06", time: "01:00" },
        status: "In Transit",
        factor: { id: "F009" },
    },
    {
        mailId: 10,
        subject: 'Test mail',
        sender: { name: "Quincy Copper", address: "753 Birch Blvd, North Haverbrook", phoneNumber: "555-0980" },
        receiver: { name: "Rachel Platinum", address: "258 Aspen St, Shelbyville", phoneNumber: "555-4327" },
        sendDate: { date: "2024-11-04", time: "05:15" },
        receiveDate: { date: "2024-11-05", time: "10:30" },
        status: "Returned",
        factor: { id: "F010" },
    },
];

const MailPage = () => {
    const [currentMails, setCurrentMails] = useState([]);
    const [statusFilter, setStatusFilter] = useState("all");
    const [searchFilter, setSearchFilter] = useState("");

    useEffect(() => {
        applyFilters();
    }, [statusFilter, searchFilter]);

    const applyFilters = () => {
        // Filter by status
        let filteredMails = mails.filter((mail) => {
            return statusFilter === "all" || mail.status.toLowerCase() === statusFilter.toLowerCase();
        });

        // Filter by search term
        if (searchFilter.trim() !== "") {
            const searchTerm = searchFilter.toLowerCase();
            filteredMails = filteredMails.filter((mail) => {
                return Object.values(mail).some((value) =>
                    typeof value === "object"
                        ? Object.values(value).some((nestedValue) =>
                            nestedValue.toString().toLowerCase().includes(searchTerm)
                        )
                        : value.toString().toLowerCase().includes(searchTerm)
                );
            });
        }

        setCurrentMails(filteredMails);
    };

    return (
        <div className="flex md:p-12 flex-col gap-4 md:gap-12 w-full h-full">
            <div className="flex justify-between items-center">
                <div>
                    <button className={'btn btn-sm btn-primary'}  onClick={() => document.getElementById("addMailModal").showModal()}>
                        <MailPlus className={'h-4 w-4'}/> <span className={'hidden md:block'}>Ajouter un courrier</span>
                    </button>
                </div>
                <div className="flex gap-2">
                    <select
                        className="select select-bordered select-sm w-full max-w-xs"
                        defaultValue={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                    >
                        <option value="all">Tout</option>
                        <option value="delivered">Livré</option>
                        <option value="in transit">En transit</option>
                        <option value="pending">En attente</option>
                        <option value="returned">Retourné</option>
                    </select>
                    <label className="input input-sm input-bordered flex items-center gap-2">
                        <input
                            type="text"
                            className="grow"
                            placeholder="Rechercher"
                            value={searchFilter}
                            onChange={(e) => setSearchFilter(e.target.value)}
                        />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70"
                        >
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </label>
                </div>
            </div>
            <div className="overflow-x-auto h-full w-full">
                { currentMails.length === 0 ? <div className={'w-full h-full flex gap-3 items-center justify-center font-bold text-3xl'}><Frown className={'w-10 h-10'}/> Aucun courrier trouvé</div> : <table className="table table-sm table-pin-rows table-pin-cols">
                    <thead>
                    <tr>
                        <th></th>
                        <td>Expéditeur</td>
                        <td>Destinataire</td>
                        <td>Sujet</td>
                        <td>Date d'envoi</td>
                        <td>Date d'arrivée</td>
                        <td>Status</td>
                        <td>Livreur</td>
                        <td>Action</td>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {currentMails.map((mail) => (
                        <>
                            <Mail
                                key={mail.mailId}
                                mailId={mail.mailId}
                                subject={mail.subject}
                                sender={mail.sender}
                                receiver={mail.receiver}
                                sendDate={mail.sendDate}
                                receiveDate={mail.receiveDate}
                                status={mail.status}
                                factor={mail.factor}
                            />
                            <MailEdit mail={mail}/>
                        </>

                    ))}
                    </tbody>
                    <tfoot>
                    <tr>
                        <th></th>
                        <td>Expéditeur</td>
                        <td>Destinataire</td>
                        <td>Sujet</td>
                        <td>Date d'envoi</td>
                        <td>Date d'arrivée</td>
                        <td>Status</td>
                        <td>Livreur</td>
                        <td>Action</td>
                        <th></th>
                    </tr>
                    </tfoot>
                </table>}
                <MailAdd/>
            </div>
        </div>
    );
};

export default MailPage;