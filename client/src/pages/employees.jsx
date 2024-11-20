import {MailPlus, UserPlus2} from "lucide-react";
import EmployeeCard from "../components/employeeCard.jsx";
import {useEffect, useState} from "react";

const employees = [
    {
        id: "E001",
        fullname: "Andrianarivo Heritiana",
        role: "Manager",
        email: "heritiana.andrianarivo@example.com",
        phoneNumber: "034 12 345 67",
    },
    {
        id: "E002",
        fullname: "Rakotomalala Fenosoa",
        role: "Postman",
        email: "fenosoa.rakotomalala@example.com",
        phoneNumber: "033 98 765 43",
    },
    {
        id: "E003",
        fullname: "Rasoarimanana Hery",
        role: "Postman",
        email: "hery.rasoarimanana@example.com",
        phoneNumber: "032 23 456 78",
    },
    {
        id: "E004",
        fullname: "Andriamanantena Nomena",
        role: "Manager",
        email: "nomena.andriamanantena@example.com",
        phoneNumber: "034 56 789 01",
    },
    {
        id: "E005",
        fullname: "Randriamanana Tiana",
        role: "Postman",
        email: "tiana.randriamanana@example.com",
        phoneNumber: "033 12 678 45",
    },
    {
        id: "E006",
        fullname: "Rabetokotany Faly",
        role: "Manager",
        email: "faly.rabetokotany@example.com",
        phoneNumber: "034 45 678 90",
    },
    {
        id: "E007",
        fullname: "Ravoahangy Onja",
        role: "Postman",
        email: "onja.ravoahangy@example.com",
        phoneNumber: "032 56 789 23",
    },
    {
        id: "E008",
        fullname: "Rakotondrabe Tojo",
        role: "Manager",
        email: "tojo.rakotondrabe@example.com",
        phoneNumber: "034 67 890 12",
    },
    {
        id: "E009",
        fullname: "Rasamoelina Arisoa",
        role: "Postman",
        email: "arisoa.rasamoelina@example.com",
        phoneNumber: "033 89 012 34",
    },
    {
        id: "E010",
        fullname: "Razafindramary Fitiavana",
        role: "Manager",
        email: "fitiavana.razafindramary@example.com",
        phoneNumber: "034 90 123 45",
    },
];

const EmployeesPage = () => {
    const [currentEmployees, setCurrentEmployees] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [roleFilter, setRoleFilter] = useState("all");

    useEffect(() => {
        filterEmployees();
    }, [searchText, roleFilter]);

    const filterEmployees = () => {
        let filteredEmployees = employees;

        if (roleFilter !== "all") {
            filteredEmployees = filteredEmployees.filter(
                (employee) => employee.role.toLowerCase() === roleFilter
            );
        }

        if (searchText.trim() !== "") {
            filteredEmployees = filteredEmployees.filter((employee) => {
                const search = searchText.toLowerCase();
                return (
                    employee.fullname.toLowerCase().includes(search) ||
                    employee.email.toLowerCase().includes(search) ||
                    employee.phoneNumber.includes(search) ||
                    employee.role.toLowerCase().includes(search)
                );
            });
        }

        setCurrentEmployees(filteredEmployees);
    };

    return (
        <>
            <div className="w-full h-full lg:p-12">
                <div className="flex w-full mb-10 justify-between items-center">
                    <div>
                        <button
                            className="btn btn-sm btn-primary"
                            onClick={() => document.getElementById("addMailModal").showModal()}
                        >
                            <UserPlus2 className="h-4 w-4" />
                            <span className="hidden md:block">Ajouter un employé</span>
                        </button>
                    </div>
                    <div className="flex gap-2">
                        <select
                            className="select select-bordered select-sm w-full max-w-xs"
                            onChange={(e) => setRoleFilter(e.target.value)}
                        >
                            <option value="all">Tout</option>
                            <option value="postman">Facteurs</option>
                            <option value="manager">Gérants</option>
                        </select>
                        <label className="input input-sm input-bordered flex items-center gap-2">
                            <input
                                type="text"
                                className="grow"
                                placeholder="Rechercher"
                                onChange={(e) => setSearchText(e.target.value)}
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
                <div
                    className="grid gap-6 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 p-4 overflow-y-auto overflow-x-hidden h-full"
                >
                    {currentEmployees.map((employee) => (
                        <EmployeeCard
                            key={employee.id}
                            id={employee.id}
                            fullname={employee.fullname}
                            role={employee.role}
                            email={employee.email}
                            phoneNumber={employee.phoneNumber}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default EmployeesPage;