using Microsoft.AspNetCore.Mvc;

namespace CAR_GO.Controllers
{
    public class ContactController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
