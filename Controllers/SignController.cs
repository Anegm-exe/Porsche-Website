using Microsoft.AspNetCore.Mvc;

namespace Porsche_Website.Controllers
{
    public class SignController : Controller
    {
        public IActionResult SignUp()
        {
            return View();
        }

        public IActionResult SignIn()
        {
            return View();
        }
    }
}
