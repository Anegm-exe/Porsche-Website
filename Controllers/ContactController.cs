using Microsoft.AspNetCore.Mvc;

namespace Porsche_Website.Controllers
{
    public class ContactController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
