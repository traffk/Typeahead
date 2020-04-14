using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using System.Threading.Tasks;

namespace Blazored.Typeahead
{
    public static class Interop
    {
        internal static async ValueTask Focus(IJSRuntime jsRuntime, ElementReference element)
        {
            await jsRuntime.InvokeVoidAsync("blazoredTypeahead.setFocus", element);
        }

        internal static async ValueTask AddKeyDownEventListener(IJSRuntime jsRuntime, ElementReference element)
        {
            await jsRuntime.InvokeVoidAsync("blazoredTypeahead.addKeyDownEventListener", element);
        }
        
        internal static async ValueTask AddOnFocusEventListener(IJSRuntime jsRuntime, ElementReference element)
        {
            await jsRuntime.InvokeVoidAsync("blazoredTypeahead.addOnFocusListener", element);
        }

        internal static async ValueTask AddOnBlurEventListener(IJSRuntime jsRuntime, ElementReference element)
        {
            await jsRuntime.InvokeVoidAsync("blazoredTypeahead.addOnBlurListener", element);
        }

        internal static async ValueTask AddOnFocusInEventListener(IJSRuntime jsRuntime, ElementReference element)
        {
            await jsRuntime.InvokeVoidAsync("blazoredTypeahead.addOnFocusInListener", element);
        }

        internal static async ValueTask AddOnFocusOutEventListener(IJSRuntime jsRuntime, ElementReference element)
        {
            await jsRuntime.InvokeVoidAsync("blazoredTypeahead.addOnFocusOutListener", element);
        }
    }
}
