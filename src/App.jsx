import DesktopMenu from "./components/desktop-menu";
import MobMenu from "./components/mobile-menu";
import { Menus } from "./util";

function App() {
	return (
		<div>
			<header className="h-16 text-base fixed inset-0 flex items-center bg-[#18181A]">
				<nav className="flex items-center justify-between w-full max-w-7xl mx-auto px-3.5">
					<div className="flex items-center gap-x-3 z-50 relative">
						Logo
						<h3 className="text-lg font-semibold">Title</h3>
					</div>

					<ul className="gap-x-1 lg:flex items-center hidden">
						{Menus.map((menu) => (
							<DesktopMenu menu={menu} />
						))}
					</ul>

					<div className="flex items-center gap-x-5">
						<button className="bg-white/5 z-10 relative px-3 py-1.5 shadow rounded-xl flex items-center">
							Sign In
						</button>
						<div className="lg:hidden">
							<MobMenu menus={Menus} />
						</div>
					</div>
				</nav>
			</header>
		</div>
	);
}

export default App;
