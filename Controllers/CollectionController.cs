using Microsoft.AspNetCore.Mvc;

namespace Porsche_Website.Controllers
{
    public class CollectionController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
