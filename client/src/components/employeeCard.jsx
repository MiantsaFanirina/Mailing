import { Ellipsis, Mail, Phone } from "lucide-react";

const EmployeeCard = ({ id, fullname, role, email, phoneNumber }) => {
    // Determine the display text and badge style based on the role
    const roleDisplay = role === "Manager" ? "Gérant" : "Facteur";
    const badgeStyle = role === "Manager" ? "badge-primary" : "badge-secondary";

    return (
        <>
            <div className="card bg-base-100 max-h-fit min-w-fit shadow-xl relative">
                <div className="pt-10">
                    <div className="flex flex-col items-center gap-2">
                        <div className="avatar">
                            <div className="mask mask-squircle w-24">
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                    alt={`${fullname}'s avatar`}
                                />
                            </div>
                        </div>
                        <h1 className="font-bold">
                            {fullname} <span className="badge badge-outline badge-md text-xs">{id}</span>
                        </h1>
                        <h2 className={`text-sm badge ${badgeStyle} badge-outline`}>{roleDisplay}</h2>
                    </div>
                </div>

                <div className="card-body p-3 flex justify-center items-center">
                    <div className="p-6 w-full flex flex-col gap-3 rounded bg-base-200">
                        <h1 className="flex text-xs items-center gap-2 font-bold">
                            <Mail className="w-4 h-4" /> {email}
                        </h1>
                        <h1 className="flex text-xs items-center font-bold gap-2">
                            <Phone className="w-4 h-4" /> {phoneNumber}
                        </h1>
                    </div>
                    <div className="dropdown absolute top-6 right-6">
                        <div tabIndex={0} role="button" className="m-1">
                            <Ellipsis />
                        </div>
                        <ul
                            tabIndex={0}
                            className="dropdown-content dropdown-end opacity-90  menu border border-accent-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                        >
                            <li>
                                <a>Modifier</a>
                            </li>
                            <li className="text-error">
                                <a>Supprimer</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EmployeeCard;
