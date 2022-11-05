 //import Au10tixSmartDocumentCaptureKit

 @objc(Au10tixsdc)
 class Au10tixsdc: NSObject {

   @objc(multiply:withB:withResolver:withRejecter:)
   func multiply(a: Float, b: Float, resolve:RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) -> Void {
     resolve(a*b)
   }

     //   @objc(startSDC:withResolver:withRejecter:)
     // func startSDC(token: String, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) -> Void {
     //     session.start(with: Au10tix.shared.bearerToken!, previewView: previewView) { result in
     //         switch result {
     //         case .success(let sessionID):
     //             print(sessionID)
     //         case .failure(let error):
     //             print(error.localizedDescription)
     //         }
     //    }
     // }
 }

 @objc(SdcviewViewManager)
 class SdcviewViewManager: RCTViewManager {

   override func view() -> (SdcviewView) {
     return SdcviewView()
   }

   @objc override static func requiresMainQueueSetup() -> Bool {
     return false
   }
 }

 class SdcviewView : UIView {

   @objc var color: String = "" {
     didSet {
       self.backgroundColor = hexStringToUIColor(hexColor: color)
     }
   }

   func hexStringToUIColor(hexColor: String) -> UIColor {
     let stringScanner = Scanner(string: hexColor)

     if(hexColor.hasPrefix("#")) {
       stringScanner.scanLocation = 1
     }
     var color: UInt32 = 0
     stringScanner.scanHexInt32(&color)

     let r = CGFloat(Int(color >> 16) & 0x000000FF)
     let g = CGFloat(Int(color >> 8) & 0x000000FF)
     let b = CGFloat(Int(color) & 0x000000FF)

     return UIColor(red: r / 255.0, green: g / 255.0, blue: b / 255.0, alpha: 1)
   }
 }

