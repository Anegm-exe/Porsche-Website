using Microsoft.AspNetCore.Mvc;

namespace Porsche_Website.Controllers
{
    public class AboutController : Controller
    {
        public IActionResult Info()
        {
            return View();
        }

    }
}
